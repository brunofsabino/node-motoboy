/*
  Warnings:

  - Added the required column `corporateName` to the `invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endRoute` to the `invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idRoute` to the `invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameFantasy` to the `invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberInvoice` to the `invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telephone` to the `invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valueRoute` to the `invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "invoices" ADD COLUMN     "corporateName" TEXT NOT NULL,
ADD COLUMN     "endRoute" TEXT NOT NULL,
ADD COLUMN     "idRoute" TEXT NOT NULL,
ADD COLUMN     "nameFantasy" TEXT NOT NULL,
ADD COLUMN     "numberInvoice" INTEGER NOT NULL,
ADD COLUMN     "requester" TEXT,
ADD COLUMN     "startRoute" TEXT,
ADD COLUMN     "telephone" TEXT NOT NULL,
ADD COLUMN     "valueRoute" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_idRoute_fkey" FOREIGN KEY ("idRoute") REFERENCES "routes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
