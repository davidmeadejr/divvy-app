import { createRealmContext } from "@realm/react";
import { Task } from "../models/Task";
// const Task = require("../models/Task");

export const { useRealm, useQuery, RealmProvider } = createRealmContext({
  schema: [Task.schema],
  deleteRealmIfMigrationNeeded: true,
});
