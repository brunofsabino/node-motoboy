/*
  Warnings:

  - You are about to drop the column `cep` on the `routes` table. All the data in the column will be lost.
  - Added the required column `clientName` to the `routes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "routes" DROP COLUMN "cep",
ADD COLUMN     "cepEndRoute" TEXT,
ADD COLUMN     "cepStartRoute" TEXT,
ADD COLUMN     "clientName" TEXT NOT NULL;
