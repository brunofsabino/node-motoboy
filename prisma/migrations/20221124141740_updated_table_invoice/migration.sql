-- AlterTable
ALTER TABLE "invoices" ALTER COLUMN "numberInvoice" DROP DEFAULT;
DROP SEQUENCE "invoices_numberinvoice_seq";
