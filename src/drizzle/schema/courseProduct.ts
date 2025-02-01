import { pgTable, uuid } from "drizzle-orm/pg-core";
import { CourseTable } from "./course";
import { ProductTable } from "./product";
import { createdAt, updatedAt } from "../schemaHelpers";
import { primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const CourseProductsTable = pgTable(
  "course_products",
  {
    courseId: uuid()
      .notNull()
      .references(() => CourseTable.id, { onDelete: "restrict" }),
    productId: uuid()
      .notNull()
      .references(() => ProductTable.id, { onDelete: "cascade" }),
    createdAt,
    updatedAt,
  },
  (t) => [primaryKey({ columns: [t.courseId, t.productId] })]
);

export const CourseProductsRelationships = relations(
  CourseProductsTable,
  ({ one }) => ({
    course: one(CourseTable, {
      fields: [CourseProductsTable.courseId],
      references: [CourseTable.id],
    }),
    product: one(ProductTable, {
      fields: [CourseProductsTable.productId],
      references: [ProductTable.id],
    }),
  })
);
