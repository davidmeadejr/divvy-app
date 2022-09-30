import { Realm } from "@realm/react";

export class Item {
  constructor({ id = new Realm.BSON.ObjectId(), name, amount }) {
    this.name = name;
    this.amount = amount;
    this._id = id;
    this.friends = [];
  }

  static schema = {
    name: "Item",
    primaryKey: "_id",
    properties: {
      name: "string",
      _id: "objectId",
      amount: "float",
      friends: "Friend[]",
    },
  };
}
