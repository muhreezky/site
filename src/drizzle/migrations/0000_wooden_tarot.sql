CREATE TABLE `messages` (
	`id` integer PRIMARY KEY NOT NULL,
	`fullname` text(100) NOT NULL,
	`content` text NOT NULL,
	`company` text(100) NOT NULL,
	`phone` text(25) NOT NULL,
	`email` text(120) NOT NULL,
	`created_at` integer NOT NULL
);
