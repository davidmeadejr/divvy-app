export default interpretReceipt = (responseObj) => {
  if (!responseObj) return [];
  verifyArgument(responseObj);
  let name = responseObj.data.amounts[0].name;

  if (
    name === "-FOOD 29.25 --" ||
    name === "-Prev Bal  29.25" ||
    name === "SUBTOTAL 29.25"
  )
    return [];
  if (parseFloat(name[0])) {
    const nameAsArray = name.split(" ");
    nameAsArray.splice(0, 1);
    name = nameAsArray.join(" ");
  }

  if (name.includes(responseObj.data.amounts[0].data.toString())) {
    const nameAsArray = name.split(" ");
    nameAsArray.splice(nameAsArray.length - 1, 1);
    name = nameAsArray.join(" ");
  }
  return [
    {
      amount: responseObj.data.amounts[0].data,
      name: name,
    },
  ];
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
