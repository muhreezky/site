CREATE TABLE `messages` (
	`id` integer PRIMARY KEY NOT NULL,
	`fullname` text NOT NULL,
	`text` text NOT NULL,
	`created_at` integer DEFAULT (CAST (unixepoch() as int)) NOT NULL
);
