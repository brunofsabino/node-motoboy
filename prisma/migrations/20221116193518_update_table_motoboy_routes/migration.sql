/*
  Warnings:

  - You are about to drop the `motoboysRoute` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "motoboysRoute" DROP CONSTRAINT "motoboysRoute_clientId_fkey";

-- DropForeignKey
ALTER TABLE "motoboysRoute" DROP CONSTRAINT "motoboysRoute_motoboyId_fkey";

-- DropForeignKey
ALTER TABLE "motoboysRoute" DROP CONSTRAINT "motoboysRoute_routeId_fkey";

-- DropTable
DROP TABLE "motoboysRoute";

-- CreateTable
CREATE TABLE "motoboysRoutes" (
    "id" TEXT NOT NULL,
    "motoboyId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "nameMotoboy" TEXT NOT NULL,
    "celularMotoboy" TEXT,
    "clientName" TEXT NOT NULL,
    "cepStartRoute" TEXT,
    "cepEndRoute" TEXT,
    "startRoute" TEXT,
    "requesterRoute" TEXT,
    "commentsEndRoute" TEXT,
    "endRoute" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "valueRoute" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "motoboysRoutes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "motoboysRoutes" ADD CONSTRAINT "motoboysRoutes_motoboyId_fkey" FOREIGN KEY ("motoboyId") REFERENCES "motoboys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "motoboysRoutes" ADD CONSTRAINT "motoboysRoutes_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "motoboysRoutes" ADD CONSTRAINT "motoboysRoutes_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
