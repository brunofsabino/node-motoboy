/*
  Warnings:

  - Added the required column `clientId` to the `motoboysRoute` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "motoboysRoute" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "motoboysRoute" ADD CONSTRAINT "motoboysRoute_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
