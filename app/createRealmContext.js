import { createRealmContext } from "@realm/react";
import { Friend } from "./models/Friend";
import { Item } from "./models/Item";

export const { useRealm, useQuery, RealmProvider } = createRealmContext({
  schema: [Friend.schema, Item.schema],
  deleteRealmIfMigrationNeeded: true,
});
