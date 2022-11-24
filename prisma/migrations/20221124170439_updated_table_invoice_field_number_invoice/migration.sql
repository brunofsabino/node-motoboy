-- AlterTable
CREATE SEQUENCE "invoices_numberinvoice_seq";
ALTER TABLE "invoices" ALTER COLUMN "numberInvoice" SET DEFAULT nextval('invoices_numberinvoice_seq');
ALTER SEQUENCE "invoices_numberinvoice_seq" OWNED BY "invoices"."numberInvoice";
