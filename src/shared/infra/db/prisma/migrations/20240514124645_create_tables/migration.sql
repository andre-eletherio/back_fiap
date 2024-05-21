/*
  Warnings:

  - Added the required column `degree` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `degreeLevel` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `degree` INTEGER NOT NULL,
    ADD COLUMN `degreeLevel` INTEGER NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NULL,
    ADD COLUMN `role` BOOLEAN NULL,
    MODIFY `name` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `like` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user1` INTEGER NULL,
    `user2` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `interest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `like` ADD CONSTRAINT `like_user1_fkey` FOREIGN KEY (`user1`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `like` ADD CONSTRAINT `like_user2_fkey` FOREIGN KEY (`user2`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `interest` ADD CONSTRAINT `interest_user_fkey` FOREIGN KEY (`user`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
