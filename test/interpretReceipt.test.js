import interpretReceipt from "../app/interpretReceipt";
import exampleTaggunResponse from "./resources/exampleTaggunResponse";

describe("interpretReceipt method", () => {
  it("returns an empty array if nothing is provided", () => {
    expect(interpretReceipt()).toEqual([]);
  });

  it("returns an error if the argument is not an object", () => {
    expect(() => {
      interpretReceipt("string");
    }).toThrow(
      new Error("Incorrect datatype in argument for interpretReceipt")
    );
  });

  it("returns an error if the argument is not an object", () => {
    expect(() => {
      interpretReceipt([1]);
    }).toThrow(
      new Error("Incorrect datatype in argument for interpretReceipt")
    );
  });

  it("returns an error if the argument is not an object", () => {
    expect(() => {
      interpretReceipt(1);
    }).toThrow(
      new Error("Incorrect datatype in argument for interpretReceipt")
    );
  });

  it("returns an object with name and amount that fit criteria", () => {
    expect(
      interpretReceipt({ data: { amounts: [{ data: 3.5, name: "Pasta" }] } })
    ).toEqual([{ data: 3.5, name: "Pasta" }]);
  });
});
