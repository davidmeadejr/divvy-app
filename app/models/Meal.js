import { Realm } from "@realm/react";

export class Meal {
  constructor({ id = new Realm.BSON.ObjectId() }) {
    this.name = "";
    this.createdAt = new Date().toISOString();
    this.tipAmount = 0;
    this.serivceChargeAmount = 0;
    this._id = id;
    this.friends = [];
    this.items = [];
  }

  static schema = {
    name: "Meal",
    primaryKey: "_id",
    properties: {
      name: "string",
      createdAt: "string",
      _id: "objectId",
      tipAmount: "float",
      serivceChargeAmount: "float",
      friends: "Friend[]",
      items: "Item[]",
    },
  };
}
