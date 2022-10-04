-- AlterTable
ALTER TABLE "routes" ADD COLUMN     "nameMotoboy" TEXT;

-- CreateTable
CREATE TABLE "motoboysRoute" (
    "id" TEXT NOT NULL,
    "motoboyId" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "nameMotoboy" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "cepStartRoute" TEXT,
    "cepEndRoute" TEXT,
    "startRoute" TEXT,
    "endRoute" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "valueRoute" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "motoboysRoute_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "motoboysRoute" ADD CONSTRAINT "motoboysRoute_motoboyId_fkey" FOREIGN KEY ("motoboyId") REFERENCES "motoboys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "motoboysRoute" ADD CONSTRAINT "motoboysRoute_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
