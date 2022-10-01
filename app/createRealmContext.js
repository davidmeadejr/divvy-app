import { createRealmContext } from "@realm/react";
import { Friend } from "./models/Friend";
import { Item } from "./models/Item";
import { Meal } from "./models/Meal";

export const { useRealm, useQuery, RealmProvider } = createRealmContext({
  schema: [Friend.schema, Item.schema, Meal.schema],
  deleteRealmIfMigrationNeeded: true,
});
