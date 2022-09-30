import { createRealmContext } from "@realm/react";
import { Friend } from "./models/Friend";

export const { useRealm, useQuery, RealmProvider } = createRealmContext({
  schema: [Friend.schema],
  deleteRealmIfMigrationNeeded: true,
});
