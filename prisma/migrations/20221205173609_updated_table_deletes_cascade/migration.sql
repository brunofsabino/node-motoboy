-- DropForeignKey
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_cnpjId_fkey";

-- DropForeignKey
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_idRoute_fkey";

-- DropForeignKey
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_motoboyId_fkey";

-- DropForeignKey
ALTER TABLE "motoboysRoutes" DROP CONSTRAINT "motoboysRoutes_clientId_fkey";

-- DropForeignKey
ALTER TABLE "motoboysRoutes" DROP CONSTRAINT "motoboysRoutes_motoboyId_fkey";

-- DropForeignKey
ALTER TABLE "routes" DROP CONSTRAINT "routes_clientId_fkey";

-- DropForeignKey
ALTER TABLE "routes" DROP CONSTRAINT "routes_userId_fkey";

-- AddForeignKey
ALTER TABLE "routes" ADD CONSTRAINT "routes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routes" ADD CONSTRAINT "routes_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "motoboysRoutes" ADD CONSTRAINT "motoboysRoutes_motoboyId_fkey" FOREIGN KEY ("motoboyId") REFERENCES "motoboys"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "motoboysRoutes" ADD CONSTRAINT "motoboysRoutes_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_idRoute_fkey" FOREIGN KEY ("idRoute") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_cnpjId_fkey" FOREIGN KEY ("cnpjId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_motoboyId_fkey" FOREIGN KEY ("motoboyId") REFERENCES "motoboys"("id") ON DELETE CASCADE ON UPDATE CASCADE;
