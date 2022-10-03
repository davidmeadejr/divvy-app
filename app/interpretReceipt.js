export default interpretReceipt = (responseObj) => {
  if (!responseObj) return [];
  verifyArgumentIsObject(responseObj);
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

  if (!parseFloat(filteredArray[0].text[0])) {
    return filteredArray.map((item) => {
      if (responseObj.totalAmount.data === item.data) return;
      name = item.text;
      if (name.includes(filteredArray[0].data.toString())) {
        const nameAsArray = name.split(" ");
        nameAsArray.splice(nameAsArray.length - 1, 1);
        name = nameAsArray.join(" ");
      }
      return { amount: item.data, name: name };
    });
  }

  let name = filteredArray[0].text;
  let quantity = 1;
  if (parseFloat(name[0])) {
    quantity = parseFloat(name[0]);
    const nameAsArray = name.split(" ");
    nameAsArray.splice(0, 1);
    name = nameAsArray.join(" ");
  }

  return Array(quantity).fill({
    amount: filteredArray[0].data,
    name: name,
  });
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
