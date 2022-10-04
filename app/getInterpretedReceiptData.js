export default getInterpretedReceiptData = (responseObj) => {
  if (!responseObj) return [];
  verifyArgumentIsObject(responseObj);
  const alteredArray = getAlteredArrayWithAddedAndRemovedEntries(responseObj);
  return alteredArray.map(stripInvalidStringsFromItemName);
};

const verifyArgumentIsObject = (responseObj) => {
  if (
    !(
      typeof responseObj === "object" &&
      responseObj !== null &&
      !Array.isArray(responseObj)
    )
  )
    throw new Error(
      "Incorrect datatype in argument for getInterpretedReceiptData"
    );
};

const getAlteredArrayWithAddedAndRemovedEntries = (responseObj) => {
  const filteredArray = removeInvalidEntriesFromArray(responseObj);
  return duplicateEntriesInArrayForQuantity(filteredArray);
};

const removeInvalidEntriesFromArray = (responseObj) => {
  const result = [];
  const resultText = [];
  responseObj.amounts.forEach((item) => {
    if (responseObj.totalAmount.data === item.data) return;
    // resultText is so indexOf can find the item with
    // a text property with the same index
    // without having to mutate result with map
    const idx = resultText.indexOf(item.text);
    // check the data in the array match is different to item's data
    if (idx > -1 && result[idx].data !== item.data) {
      // different data means the entry is invalid and represents a misread receipt
      // The entry will have likely have two values in the name representing quantity
      // first value the price of the item, second value the cost of combined items
      // eg. 2x SOUP 3.00 6.00
      // {data: 3, text: "SOUP"}, {data: 6, text: SOUP}
      // if found match data is less, replace with item's data value
      if (result[idx].data > item.data) result[idx].data = item.data;
    } else {
      // only push to result array if entry is valid
      result.push(item);
      resultText.push(item.text);
    }
  });
  return result;
};

const duplicateEntriesInArrayForQuantity = (filteredArray) => {
  let newArray = [];
  filteredArray.forEach((item) => {
    let quantity = parseInt(item.text.match(/^[0-9]/gi));
    quantity = isNaN(quantity) ? 1 : quantity;
    newArray = [...newArray, ...Array(quantity).fill(item)];
  });
  return newArray;
};

const stripInvalidStringsFromItemName = (item) => {
  const itemName = item.text
    // removes case insensitive quantities at the beginning of the name
    // eg. 2x, 14x, 5X
    .replace(/^[0-9]x/gi, "")
    // removes item amount from the item name
    .replace(new RegExp(item.data.toFixed(2)), "")
    .replace(/[\d\.]+$/gi, "")
    .trim();
  return { amount: item.data, name: itemName };
};
