/*
  Warnings:

  - You are about to drop the column `user1` on the `like` table. All the data in the column will be lost.
  - You are about to drop the column `user2` on the `like` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `like` DROP FOREIGN KEY `like_user1_fkey`;

-- DropForeignKey
ALTER TABLE `like` DROP FOREIGN KEY `like_user2_fkey`;

-- AlterTable
ALTER TABLE `like` DROP COLUMN `user1`,
    DROP COLUMN `user2`,
    ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `like` ADD CONSTRAINT `like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
