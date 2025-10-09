CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"image" text,
	"description" text,
	"price" integer,
	"updated_At" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_At" timestamp DEFAULT CURRENT_TIMESTAMP
);
