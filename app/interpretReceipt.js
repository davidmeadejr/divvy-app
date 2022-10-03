export default interpretReceipt = (responseObj) => {
  if (!responseObj) return [];
  verifyArgumentIsObject(responseObj);
  let filteredArray = filterArrayForInvalidEntries(responseObj);
  filteredArray = duplicateArrayForQuantity(filteredArray);
  return filteredArray.map(iterateThroughArray);
};

const iterateThroughArray = (item, idx, filteredArray) => {
  let itemName = item.text;
  itemName = itemName.replace(/^[0-9]x/gi, "").trim();
  if (itemName.includes(filteredArray[0].data.toString())) {
    const nameAsArray = itemName.split(" ");
    nameAsArray.splice(nameAsArray.length - 1, 1);
    itemName = nameAsArray.join(" ");
  }
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

const filterArrayForInvalidEntries = (responseObj) => {
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

const duplicateArrayForQuantity = (filteredArray) => {
  const newArray = [];
  filteredArray.forEach((item) => {
    let pushTimes = 1;
    if (item.text.match(/^[0-9]+x.*/gi))
      pushTimes = parseInt(item.text.match(/^[0-9]/gi));
    for (let i = 0; i < pushTimes; i++) newArray.push(item);
  });
  return newArray;
};
