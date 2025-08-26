/*
  Warnings:

  - Added the required column `address` to the `Institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Institution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Institution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Institution" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
