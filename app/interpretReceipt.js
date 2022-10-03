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
  return [
    {
      amount: responseObj.data.amounts[0].data,
      name: responseObj.data.amounts[0].name,
    },
  ];
};
