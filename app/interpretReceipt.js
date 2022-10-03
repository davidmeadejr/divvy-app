export default interpretReceipt = (responseObj) => {
  if (!responseObj) return [];
  verifyArgumentIsObject(responseObj);

  if (
    responseObj.amounts.length === 2 &&
    responseObj.amounts[0].text === responseObj.amounts[1].text &&
    responseObj.amounts[0].data !== responseObj.amounts[1].data
  ) {
    const amountsArr = responseObj.amounts;
    return [
      {
        amount:
          amountsArr[0].data > amountsArr[1].data
            ? amountsArr[1].data
            : amountsArr[0].data,
        name: amountsArr[0].text,
      },
    ];
  }

  if (!parseFloat(responseObj.amounts[0].text[0])) {
    return responseObj.amounts.map((item) => {
      if (responseObj.totalAmount.data === item.data) return;
      name = item.text;
      if (name.includes(responseObj.amounts[0].data.toString())) {
        const nameAsArray = name.split(" ");
        nameAsArray.splice(nameAsArray.length - 1, 1);
        name = nameAsArray.join(" ");
      }
      return { amount: item.data, name: name };
    });
  }

  let name = responseObj.amounts[0].text;
  let quantity = 1;
  if (parseFloat(name[0])) {
    quantity = parseFloat(name[0]);
    const nameAsArray = name.split(" ");
    nameAsArray.splice(0, 1);
    name = nameAsArray.join(" ");
  }

  return Array(quantity).fill({
    amount: responseObj.amounts[0].data,
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
