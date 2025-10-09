CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"fname" varchar(100) NOT NULL,
	"lname" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"provider" varchar(20),
	"externalId" varchar(100) NOT NULL,
	"image" text,
	"role" varchar(100) DEFAULT 'customer' NOT NULL,
	"updated_At" timestamp DEFAULT CURRENT_TIMESTAMP,
	"created_At" timestamp DEFAULT 		  CURRENT_TIMESTAMP

);
