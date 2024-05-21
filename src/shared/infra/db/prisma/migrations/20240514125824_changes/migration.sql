/*
  Warnings:

  - You are about to drop the column `user` on the `interest` table. All the data in the column will be lost.
  - Added the required column `userId` to the `interest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `interest` DROP FOREIGN KEY `interest_user_fkey`;

-- AlterTable
ALTER TABLE `interest` DROP COLUMN `user`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `degree` INTEGER NULL,
    MODIFY `degreeLevel` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `interest` ADD CONSTRAINT `interest_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
