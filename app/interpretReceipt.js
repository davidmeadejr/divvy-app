export default interpretReceipt = (responseObj) => {
  if (!responseObj) return [];
  verifyArgument(responseObj);
  if (responseObj.amounts.length > 1) {
    return responseObj.amounts.map((item) => {
      return { amount: item.data, name: item.text };
    });
  }

  let name = responseObj.amounts[0].text;
  let quantity = 1;
  if (responseObj.totalAmount.data === responseObj.amounts[0].data) return [];
  if (parseFloat(name[0])) {
    quantity = parseFloat(name[0]);
    const nameAsArray = name.split(" ");
    nameAsArray.splice(0, 1);
    name = nameAsArray.join(" ");
  }

  if (name.includes(responseObj.amounts[0].data.toString())) {
    const nameAsArray = name.split(" ");
    nameAsArray.splice(nameAsArray.length - 1, 1);
    name = nameAsArray.join(" ");
  }
  return Array(quantity).fill({
    amount: responseObj.amounts[0].data,
    name: name,
  });
};

const verifyArgument = (responseObj) => {
  if (
    !(
      typeof responseObj === "object" &&
      responseObj !== null &&
      !Array.isArray(responseObj)
    )
  )
    throw new Error("Incorrect datatype in argument for interpretReceipt");
};
