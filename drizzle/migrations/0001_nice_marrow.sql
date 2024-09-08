ALTER TABLE `messages` RENAME COLUMN `text` TO `message`;--> statement-breakpoint
ALTER TABLE `messages` ADD `company` text NOT NULL;--> statement-breakpoint
ALTER TABLE `messages` ADD `phone` text NOT NULL;--> statement-breakpoint
ALTER TABLE `messages` ADD `email` text NOT NULL;