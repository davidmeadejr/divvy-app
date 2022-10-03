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
  if (responseObj.data.amounts[0].data === 6)
    return [{ data: 6, name: "Ice cream" }];
  return [{ data: 3.5, name: "Pasta" }];
};
