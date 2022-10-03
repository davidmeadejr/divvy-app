export default interpretReceipt = (responseObj) => {
  if (!responseObj) return [];
  console.log(typeof responseObj);
  if (
    typeof responseObj === "string" ||
    Array.isArray(responseObj) ||
    Number.isInteger(responseObj)
  )
    throw new Error("Incorrect datatype in argument for interpretReceipt");
};
