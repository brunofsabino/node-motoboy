/*
  Warnings:

  - You are about to drop the column `userId` on the `routes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "routes" DROP CONSTRAINT "routes_userId_fkey";

-- AlterTable
ALTER TABLE "routes" DROP COLUMN "userId",
ALTER COLUMN "motoboyId" SET DEFAULT 'null';
