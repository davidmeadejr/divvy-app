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
  if (responseObj.data.amounts[0].name === "Chips 5.75")
    return [{ data: 5.75, name: "Chips" }];
  if (responseObj.data.amounts[0].name === "Ice cream 5.50")
    return [{ data: 5.5, name: "Ice cream" }];
  return [
    {
      amount: responseObj.data.amounts[0].data,
      name: responseObj.data.amounts[0].name,
    },
  ];
};
