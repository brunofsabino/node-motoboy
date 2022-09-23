/*
  Warnings:

  - A unique constraint covering the columns `[celular]` on the table `motoboys` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "motoboys_cpf_key";

-- DropIndex
DROP INDEX "motoboys_email_key";

-- DropIndex
DROP INDEX "motoboys_rg_key";

-- AlterTable
ALTER TABLE "motoboys" ADD COLUMN     "address" TEXT,
ALTER COLUMN "cpf" DROP NOT NULL,
ALTER COLUMN "rg" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "motoboys_celular_key" ON "motoboys"("celular");
