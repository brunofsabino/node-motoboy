/*
  Warnings:

  - Added the required column `description` to the `routes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "routes" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "done" BOOLEAN NOT NULL DEFAULT false;
