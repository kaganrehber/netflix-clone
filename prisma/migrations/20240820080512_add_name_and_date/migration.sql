/*
  Warnings:

  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `joinedDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
