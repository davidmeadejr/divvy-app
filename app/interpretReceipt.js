export default interpretReceipt = (responseObj) => {
  if (!responseObj) return [];
  if (
    !(
      typeof responseObj === "object" &&
      responseObj !== null &&
      !Array.isArray(responseObj)
    )
  )
    throw new Error("Incorrect datatype in argument for interpretReceipt");
  let name = responseObj.data.amounts[0].name;
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
