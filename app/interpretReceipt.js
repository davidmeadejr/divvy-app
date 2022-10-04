export default interpretReceipt = (responseObj) => {
  if (!responseObj) return [];
  verifyArgumentIsObject(responseObj);
  let filteredArray = removeInvalidEntriesFromArray(responseObj);
  filteredArray = duplicateEntriesInArrayForQuantity(filteredArray);
  return filteredArray.map(iterateThroughArray);
};

const iterateThroughArray = (item) => {
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

const verifyArgumentIsObject = (responseObj) => {
  if (
    !(
      typeof responseObj === "object" &&
      responseObj !== null &&
      !Array.isArray(responseObj)
    )
  )
    throw new Error("Incorrect datatype in argument for interpretReceipt");
};

const removeInvalidEntriesFromArray = (responseObj) => {
  const filteredArray = [];
  const filteredArrayText = [];
  responseObj.amounts.forEach((item) => {
    if (responseObj.totalAmount.data === item.data) return;
    const idx = filteredArrayText.indexOf(item.text);
    if (idx > -1 && filteredArray[idx].data !== item.data) {
      if (filteredArray[idx].data > item.data)
        filteredArray[idx].data = item.data;
    } else {
      filteredArray.push(item);
      filteredArrayText.push(item.text);
    }
  });
  return filteredArray;
};

const duplicateEntriesInArrayForQuantity = (filteredArray) => {
  const newArray = [];
  filteredArray.forEach((item) => {
    let pushTimes = 1;
    if (item.text.match(/^[0-9]+x.*/gi))
      pushTimes = parseInt(item.text.match(/^[0-9]/gi));
    for (let i = 0; i < pushTimes; i++) newArray.push(item);
  });
  return newArray;
};
