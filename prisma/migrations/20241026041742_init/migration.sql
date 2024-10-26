-- CreateTable
CREATE TABLE "Flower" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "harga" TEXT NOT NULL,
    "stok" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Flower_pkey" PRIMARY KEY ("id")
);
