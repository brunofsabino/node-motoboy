/*
  Warnings:

  - You are about to drop the column `name` on the `clients` table. All the data in the column will be lost.
  - Added the required column `cep` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `corporateName` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameFantasy` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clients" DROP COLUMN "name",
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "corporateName" TEXT NOT NULL,
ADD COLUMN     "nameFantasy" TEXT NOT NULL;
