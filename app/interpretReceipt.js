export default interpretReceipt = (responseObj) => {
  if (!responseObj) return [];
  verifyArgumentIsObject(responseObj);
  const filteredArray = filterArrayForInvalidEntries(responseObj);

  if (!parseFloat(filteredArray[0].text[0])) {
    return filteredArray.map((item) => {
      if (responseObj.totalAmount.data === item.data) return;
      let itemName = item.text;
      if (itemName.includes(filteredArray[0].data.toString())) {
        const nameAsArray = itemName.split(" ");
        nameAsArray.splice(nameAsArray.length - 1, 1);
        itemName = nameAsArray.join(" ");
      }
      return { amount: item.data, name: itemName };
    });
  }
  return duplicateEntriesForItemQuantity(filteredArray);
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

const filterArrayForInvalidEntries = (responseObj) => {
  const filteredArray = [];
  const filteredArrayText = [];
  responseObj.amounts.forEach((item) => {
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

const duplicateEntriesForItemQuantity = (filteredArray) => {
  let name = filteredArray[0].text;
  let quantity = 1;
  quantity = parseFloat(name[0]);
  const nameAsArray = name.split(" ");
  nameAsArray.splice(0, 1);
  name = nameAsArray.join(" ");

  return Array(quantity).fill({
    amount: filteredArray[0].data,
    name: name,
  });
};
