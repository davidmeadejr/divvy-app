export default interpretReceipt = (responseObj) => {
  if (!responseObj) return [];
  console.log(typeof responseObj);
  if (
    !(
      typeof responseObj === "object" &&
      responseObj !== null &&
      !Array.isArray(responseObj)
    )
  )
    throw new Error("Incorrect datatype in argument for interpretReceipt");
};
