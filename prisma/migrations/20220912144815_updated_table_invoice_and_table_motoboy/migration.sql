/*
  Warnings:

  - Added the required column `nameMotoboy` to the `invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CPF` to the `motoboys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RG` to the `motoboys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE "invoices_numberinvoice_seq";
ALTER TABLE "invoices" ADD COLUMN     "nameMotoboy" TEXT NOT NULL,
ADD COLUMN     "numberBoard" TEXT,
ALTER COLUMN "numberInvoice" SET DEFAULT nextval('invoices_numberinvoice_seq');
ALTER SEQUENCE "invoices_numberinvoice_seq" OWNED BY "invoices"."numberInvoice";

-- AlterTable
ALTER TABLE "motoboys" ADD COLUMN     "CPF" INTEGER NOT NULL,
ADD COLUMN     "RG" INTEGER NOT NULL,
ADD COLUMN     "cityBoard" TEXT,
ADD COLUMN     "numberBoard" TEXT;
