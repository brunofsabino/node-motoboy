/*
  Warnings:

  - A unique constraint covering the columns `[celular]` on the table `motoboys` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "motoboys_celular_key" ON "motoboys"("celular");
