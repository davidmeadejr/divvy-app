import { Realm } from "@realm/react";

export class Meal {
  constructor({ id = new Realm.BSON.ObjectId() }) {
    this._id = id;
    this.friends = [];
    this.items = [];
    this.name = "";
    this.createdAt = new Date().toISOString();
    this.tipAmount = 0;
    this.tipType = "percent";
    this.serivceChargeAmount = 0;
    this.serviceChargeType = "percent";
    this.discountAmount = 0;
    this.discountType = "percent";
    this.taxAmount = 0;
    this.taxType = "percent";
  }

  static schema = {
    name: "Meal",
    primaryKey: "_id",
    properties: {
      name: "string",
      createdAt: "string",
      _id: "objectId",
      tipAmount: "float",
      tipType: "string",
      serivceChargeAmount: "float",
      serviceChargeType: "string",
      friends: "Friend[]",
      items: "Item[]",
      discountAmount: "float",
      discountType: "string",
      taxAmount: "float",
      taxType: "string",
    },
  };
}
