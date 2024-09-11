CREATE TABLE `messages` (
	`id` integer PRIMARY KEY NOT NULL,
	`fullname` text(100) NOT NULL,
	`content` text NOT NULL,
	`company` text(100) NOT NULL,
	`phone` text(25) NOT NULL,
	`email` text(120) NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`status` text DEFAULT 'Live' NOT NULL,
	`platform` text DEFAULT 'Website' NOT NULL,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `stacks` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`icon` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
