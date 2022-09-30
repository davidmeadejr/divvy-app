import { Realm } from "@realm/react";

export class Friend {
  constructor({ id = new Realm.BSON.ObjectId(), name }) {
    this.name = name;
    this._id = id;
  }
  static schema = {
    name: "Friend",
    primaryKey: "_id",
    properties: {
      name: "string",
      _id: "objectId",
      items: {
        type: "linkingObjects",
        objectType: "Item",
        property: "friends",
      },
    },
  };
}
