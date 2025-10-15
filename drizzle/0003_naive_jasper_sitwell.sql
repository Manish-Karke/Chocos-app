CREATE TABLE "delivery_Person" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"phone" varchar(14) NOT NULL,
	"warehouses_id" integer,
	"order_id" integer,
	"updated_At" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_At" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
ALTER TABLE "delivery_Person" ADD CONSTRAINT "delivery_Person_warehouses_id_warehouses_id_fk" FOREIGN KEY ("warehouses_id") REFERENCES "public"."warehouses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "delivery_Person" ADD CONSTRAINT "delivery_Person_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;