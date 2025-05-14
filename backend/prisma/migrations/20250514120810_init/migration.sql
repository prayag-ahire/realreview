-- CreateTable
CREATE TABLE "ImageMetaData" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "time" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "ImageMetaData_pkey" PRIMARY KEY ("id")
);
