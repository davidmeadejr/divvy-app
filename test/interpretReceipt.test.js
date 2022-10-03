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
    ).toEqual([{ amount: 3.5, name: "Pasta" }]);
  });

  it("returns an object with name and amount that fit criteria", () => {
    expect(
      interpretReceipt({ data: { amounts: [{ data: 6, name: "Ice cream" }] } })
    ).toEqual([{ amount: 6, name: "Ice cream" }]);
  });

  it("returns an object with name and amount that fit criteria", () => {
    expect(
      interpretReceipt({ data: { amounts: [{ data: 2, name: "Chips" }] } })
    ).toEqual([{ amount: 2, name: "Chips" }]);
  });

  it("strips the amount from the name if present", () => {
    const receiptData = {
      data: { amounts: [{ data: 5.75, name: "Chips 5.75" }] },
    };
    expect(interpretReceipt(receiptData)).toEqual([
      { amount: 5.75, name: "Chips" },
    ]);
  });

  it("strips the amount from the name if present", () => {
    const receiptData = {
      data: { amounts: [{ data: 5.5, name: "Ice cream 5.50" }] },
    };
    expect(interpretReceipt(receiptData)).toEqual([
      { amount: 5.5, name: "Ice cream" },
    ]);
  });

  it("strips the amount from the name if present", () => {
    const receiptData = {
      data: { amounts: [{ data: 8, name: "Burger 8.00" }] },
    };
    expect(interpretReceipt(receiptData)).toEqual([
      { amount: 8, name: "Burger" },
    ]);
  });

  it("strips the quantity from the name 3x Burger", () => {
    const receiptData = {
      data: { amounts: [{ data: 8, name: "3x Burger" }] },
    };
    expect(interpretReceipt(receiptData)).toEqual([
      { amount: 8, name: "Burger" },
    ]);
  });

  it("strips the quantity from the name 2x Chips", () => {
    const receiptData = {
      data: { amounts: [{ data: 8, name: "2x Chips" }] },
    };
    expect(interpretReceipt(receiptData)).toEqual([
      { amount: 8, name: "Chips" },
    ]);
  });

  it("strips the quantity from the name 4x Noodles", () => {
    const receiptData = {
      data: { amounts: [{ data: 10, name: "4x Noodles" }] },
    };
    expect(interpretReceipt(receiptData)).toEqual([
      { amount: 10, name: "Noodles" },
    ]);
  });

  it("doesn't return objects containing the total price", () => {
    receiptData = {
      data: {
        totalAmount: { data: 29.25 },
        amounts: [{ data: 29.25, name: "-FOOD 29.25 --" }],
      },
    };
    expect(interpretReceipt(receiptData)).toEqual([]);
  });

  it("doesn't return objects containing the total price", () => {
    receiptData = {
      data: {
        totalAmount: { data: 29.25 },
        amounts: [{ data: 29.25, name: "-Prev Bal  29.25" }],
      },
    };
    expect(interpretReceipt(receiptData)).toEqual([]);
  });
});