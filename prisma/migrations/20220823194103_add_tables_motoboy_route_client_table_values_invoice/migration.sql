/*
  Warnings:

  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "motoboys" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "celular" TEXT NOT NULL,

    CONSTRAINT "motoboys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes" (
    "id" TEXT NOT NULL,
    "startRoute" TEXT,
    "endRoute" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "motoboyId" TEXT NOT NULL,
    "valueRoute" INTEGER NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tableValues" (
    "id" TEXT NOT NULL,
    "valueScore" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "valueDistrict" INTEGER NOT NULL,

    CONSTRAINT "tableValues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "motoboyId" TEXT NOT NULL,
    "cnpjId" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "motoboys_email_key" ON "motoboys"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clients_cnpj_key" ON "clients"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "tableValues_district_key" ON "tableValues"("district");

-- AddForeignKey
ALTER TABLE "routes" ADD CONSTRAINT "routes_motoboyId_fkey" FOREIGN KEY ("motoboyId") REFERENCES "motoboys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_cnpjId_fkey" FOREIGN KEY ("cnpjId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_motoboyId_fkey" FOREIGN KEY ("motoboyId") REFERENCES "motoboys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
