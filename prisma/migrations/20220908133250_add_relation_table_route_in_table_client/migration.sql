/*
  Warnings:

  - Added the required column `clientId` to the `routes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "routes" ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "requester" TEXT;

-- AddForeignKey
ALTER TABLE "routes" ADD CONSTRAINT "routes_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
