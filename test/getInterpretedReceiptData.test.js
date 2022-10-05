import getInterpretedReceiptData from "../app/getInterpretedReceiptData";
import exampleTaggunResponse from "./resources/exampleTaggunResponse";

describe("getInterpretedReceiptData method", () => {
  it("returns an empty array if nothing is provided", () => {
    expect(getInterpretedReceiptData()).toEqual([]);
  });

  it("returns an error if the argument is not an object", () => {
    expect(() => {
      getInterpretedReceiptData("string");
    }).toThrow(
      new Error("Incorrect datatype in argument for getInterpretedReceiptData")
    );
  });

  it("returns an error if the argument is not an object", () => {
    expect(() => {
      getInterpretedReceiptData([1]);
    }).toThrow(
      new Error("Incorrect datatype in argument for getInterpretedReceiptData")
    );
  });

  it("returns an error if the argument is not an object", () => {
    expect(() => {
      getInterpretedReceiptData(1);
    }).toThrow(
      new Error("Incorrect datatype in argument for getInterpretedReceiptData")
    );
  });

  it("returns an object with name and amount that fit criteria", () => {
    expect(
      getInterpretedReceiptData({
        totalAmount: { data: 29.25 },
        amounts: [{ data: 3.5, text: "Pasta" }],
      })
    ).toEqual([{ amount: 3.5, name: "Pasta" }]);
  });

  it("returns an object with name and amount that fit criteria", () => {
    expect(
      getInterpretedReceiptData({
        totalAmount: { data: 29.25 },
        amounts: [{ data: 6, text: "Ice cream" }],
      })
    ).toEqual([{ amount: 6, name: "Ice cream" }]);
  });

  it("returns an object with name and amount that fit criteria", () => {
    expect(
      getInterpretedReceiptData({
        totalAmount: { data: 29.25 },
        amounts: [{ data: 2, text: "Chips" }],
      })
    ).toEqual([{ amount: 2, name: "Chips" }]);
  });

  it("strips the amount from the name if present", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [{ data: 5.75, text: "Chips 5.75" }],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 5.75, name: "Chips" },
    ]);
  });

  it("strips the amount from the name if present", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [{ data: 5.5, text: "Ice cream 5.50" }],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 5.5, name: "Ice cream" },
    ]);
  });

  it("strips the amount from the name if present", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [{ data: 8, text: "Burger 8.00" }],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 8, name: "Burger" },
    ]);
  });

  it("strips the quantity from the name 3x Burger and returns three objects", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [{ data: 8, text: "3x Burger" }],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 8, name: "Burger" },
      { amount: 8, name: "Burger" },
      { amount: 8, name: "Burger" },
    ]);
  });

  it("strips the quantity from the name 2x Chips and returns two objects", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [{ data: 8, text: "2x Chips" }],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 8, name: "Chips" },
      { amount: 8, name: "Chips" },
    ]);
  });

  it("strips the quantity from the name 4x Noodles and returns four objects", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [{ data: 10, text: "4x Noodles" }],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 10, name: "Noodles" },
      { amount: 10, name: "Noodles" },
      { amount: 10, name: "Noodles" },
      { amount: 10, name: "Noodles" },
    ]);
  });

  it("doesn't return objects containing the total price", () => {
    receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [{ data: 29.25, text: "-FOOD 29.25 --" }],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([]);
  });

  it("doesn't return objects containing the total price", () => {
    receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [{ data: 29.25, text: "-Prev Bal  29.25" }],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([]);
  });

  it("doesn't return objects containing the total price", () => {
    receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [{ data: 29.25, text: "SUBTOTAL 29.25" }],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([]);
  });

  it("works with multiple amounts", () => {
    receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 5, text: "Ice cream" },
        { data: 5, text: "Ice cream" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 5, name: "Ice cream" },
      { amount: 5, name: "Ice cream" },
    ]);
  });

  it("works with multiple amounts", () => {
    receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 5, text: "Ice cream" },
        { data: 5, text: "Ice cream" },
        { data: 5, text: "Ice cream" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 5, name: "Ice cream" },
      { amount: 5, name: "Ice cream" },
      { amount: 5, name: "Ice cream" },
    ]);
  });

  it("works with multiple amounts", () => {
    receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 5, text: "Ice cream" },
        { data: 5, text: "Ice cream" },
        { data: 5, text: "Ice cream" },
        { data: 5, text: "Ice cream" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 5, name: "Ice cream" },
      { amount: 5, name: "Ice cream" },
      { amount: 5, name: "Ice cream" },
      { amount: 5, name: "Ice cream" },
    ]);
  });

  it("works with an array of 2 different values", () => {
    receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 5, text: "Ice cream" },
        { data: 6, text: "Pasta" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 5, name: "Ice cream" },
      { amount: 6, name: "Pasta" },
    ]);
  });

  it("works with an array of 3 different values", () => {
    receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 5, text: "Ice cream" },
        { data: 6, text: "Pasta" },
        { data: 7, text: "Pizza" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 5, name: "Ice cream" },
      { amount: 6, name: "Pasta" },
      { amount: 7, name: "Pizza" },
    ]);
  });

  it("works with an array of 4 different values", () => {
    receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 5, text: "Ice cream" },
        { data: 6, text: "Pasta" },
        { data: 7, text: "Pizza" },
        { data: 8, text: "Steak" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 5, name: "Ice cream" },
      { amount: 6, name: "Pasta" },
      { amount: 7, name: "Pizza" },
      { amount: 8, name: "Steak" },
    ]);
  });

  it("changes the values of an array of 2", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 5.75, text: "Chips 5.75" },
        { data: 5.75, text: "Chips 5.75" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 5.75, name: "Chips" },
      { amount: 5.75, name: "Chips" },
    ]);
  });

  it("changes the values of an array of 3", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 5.5, text: "Pizza 5.50" },
        { data: 5.5, text: "Pizza 5.50" },
        { data: 5.5, text: "Pizza 5.50" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 5.5, name: "Pizza" },
      { amount: 5.5, name: "Pizza" },
      { amount: 5.5, name: "Pizza" },
    ]);
  });

  it("changes the values of an array of 4", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 5, text: "Ice Cream 5.00" },
        { data: 5, text: "Ice Cream 5.00" },
        { data: 5, text: "Ice Cream 5.00" },
        { data: 5, text: "Ice Cream 5.00" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 5, name: "Ice Cream" },
      { amount: 5, name: "Ice Cream" },
      { amount: 5, name: "Ice Cream" },
      { amount: 5, name: "Ice Cream" },
    ]);
  });

  it("removes a duplicate with the lowest data (soup 3.95/soup 11.95)", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 3.95, text: "Soup" },
        { data: 11.95, text: "Soup" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 3.95, name: "Soup" },
    ]);
  });

  it("removes a duplicate with the lowest data (chips 3.50/chips 1.75)", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 3.5, text: "Chips" },
        { data: 1.75, text: "Chips" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 1.75, name: "Chips" },
    ]);
  });

  it("removes a duplicate with the lowest data (Ice Cream 3.50/Ice Cream 1.75)", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 5, text: "Ice Cream" },
        { data: 2.5, text: "Ice Cream" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 2.5, name: "Ice Cream" },
    ]);
  });

  it("removes duplicates with different data and leaves other entries", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 5, text: "Ice Cream" },
        { data: 2.5, text: "Ice Cream" },
        { data: 7, text: "Pizza" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 2.5, name: "Ice Cream" },
      { amount: 7, name: "Pizza" },
    ]);
  });

  it("duplicates items and leaves order unchanged", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        { data: 5, text: "Chips" },
        { data: 5, text: "2x Ice Cream" },
        { data: 7, text: "Pizza" },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 5, name: "Chips" },
      { amount: 5, name: "Ice Cream" },
      { amount: 5, name: "Ice Cream" },
      { amount: 7, name: "Pizza" },
    ]);
  });

  it("removes both sets of data from duplicate if data for duplicates is different", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        {
          data: 1.75,
          text: "2x CHIPS / ONION RINGS 1.75 3.50",
        },
        {
          data: 3.5,
          text: "2x CHIPS / ONION RINGS 1.75 3.50",
        },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 1.75, name: "CHIPS / ONION RINGS" },
      { amount: 1.75, name: "CHIPS / ONION RINGS" },
    ]);
  });

  it("removes $ sign from the text response", () => {
    const receiptData = {
      totalAmount: { data: 29.25 },
      amounts: [
        {
          data: 1.75,
          text: "2x CHIPS / ONION RINGS $ 1.75 3.50",
        },
        {
          data: 3.5,
          text: "2x CHIPS / ONION RINGS $ 1.75 3.50",
        },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 1.75, name: "CHIPS / ONION RINGS" },
      { amount: 1.75, name: "CHIPS / ONION RINGS" },
    ]);
  });

  it("removes any object that contains the words Total, Cash, or Change", () => {
    const receiptData = {
      totalAmount: { data: 20 },
      amounts: [
        {
          data: 3.5,
          text: "CHIPS",
        },
        {
          data: 16.5,
          text: "HALIBUT",
        },
        {
          data: 20,
          text: "Total bill £3.50 ",
        },
        {
          data: 30,
          text: "Cash £30.00",
        },
        {
          data: 10,
          text: "Change £10.00",
        },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 3.5, name: "CHIPS"},
      { amount: 16.5, name: "HALIBUT"}
    ]);
  });

  it("removes any object that contains the words VAT or Service", () => {
    const receiptData = {
      totalAmount: { data: 15 },
      amounts: [
        {
          data: 10,
          text: "PASTA",
        },
        {
          data: 5,
          text: "BROWNIE",
        },
        {
          data: 3,
          text: "20% VAT £3.00 ",
        },
        {
          data: 1.5,
          text: "Service charge 10% ",
        },
      ],
    };
    expect(getInterpretedReceiptData(receiptData)).toEqual([
      { amount: 10, name: "PASTA"},
      { amount: 5, name: "BROWNIE"},
    ]);
  });


  it("returns the desired result from the example response", () => {
    const result = [
      { amount: 3.95, name: "SOUP" },
      { amount: 3.95, name: "SOUP" },
      { amount: 3.95, name: "SOUP" },
      { amount: 6.95, name: "Lasagne (V)" },
      { amount: 6.95, name: "MISC FOOD" },
      { amount: 1.75, name: "CHIPS / ONION RINGS" },
      { amount: 1.75, name: "CHIPS / ONION RINGS" },
    ];
    expect(getInterpretedReceiptData(exampleTaggunResponse.data)).toEqual(
      result
    );
  });
});
