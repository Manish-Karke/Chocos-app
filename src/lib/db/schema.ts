import { sql } from "drizzle-orm";
import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";


export const users = pgTable("users",{
  id:serial("id").primaryKey(),
  fname:varchar("fname",{length:100}).notNull(),
  lname:varchar("lname",{length:100}).notNull(),
  email: varchar("email",{length:100}).notNull(),
  provider: varchar("provider",{length:20}),
  externalId: varchar("externalId",{length:100}).notNull(),
  image:text("image"),
  role:varchar("role",{length:100}).notNull().default("customer"),
  updatedAt:timestamp("updated_At").default(sql`CURRENT_TIMESTAMPS`),
  createdAt:timestamp("created_At").default(sql`CURRENT_TIMESTAMPS`)
})