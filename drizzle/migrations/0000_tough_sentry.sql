CREATE TABLE `messages` (
	`id` int NOT NULL,
	`fullname` varchar(100) NOT NULL,
	`message` text NOT NULL,
	`company` varchar(100) NOT NULL,
	`phone` varchar(25) NOT NULL,
	`email` varchar(120) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT current_timestamp,
	CONSTRAINT `messages_id` PRIMARY KEY(`id`)
);
