/*
  Warnings:

  - You are about to drop the column `CPF` on the `motoboys` table. All the data in the column will be lost.
  - You are about to drop the column `RG` on the `motoboys` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `motoboys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `motoboys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "motoboys" DROP COLUMN "CPF",
DROP COLUMN "RG",
ADD COLUMN     "cpf" INTEGER NOT NULL,
ADD COLUMN     "rg" INTEGER NOT NULL;
