/*
  Warnings:

  - You are about to drop the column `motoboyId` on the `routes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "routes" DROP CONSTRAINT "routes_motoboyId_fkey";

-- AlterTable
ALTER TABLE "routes" DROP COLUMN "motoboyId";
