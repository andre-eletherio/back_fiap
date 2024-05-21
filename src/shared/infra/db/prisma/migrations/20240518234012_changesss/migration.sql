/*
  Warnings:

  - You are about to drop the column `degreeLevel` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `degreeLevel`,
    ADD COLUMN `availability` INTEGER NULL,
    ADD COLUMN `location` VARCHAR(191) NULL;
