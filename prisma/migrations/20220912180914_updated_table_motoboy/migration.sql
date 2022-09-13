/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `motoboys` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rg]` on the table `motoboys` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "motoboys" ALTER COLUMN "cpf" SET DATA TYPE TEXT,
ALTER COLUMN "rg" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "motoboys_cpf_key" ON "motoboys"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "motoboys_rg_key" ON "motoboys"("rg");
