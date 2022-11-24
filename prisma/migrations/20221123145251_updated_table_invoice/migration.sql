-- DropForeignKey
ALTER TABLE "motoboysRoutes" DROP CONSTRAINT "motoboysRoutes_routeId_fkey";

-- AlterTable
ALTER TABLE "invoices" ALTER COLUMN "date" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "motoboysRoutes" ADD CONSTRAINT "motoboysRoutes_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
