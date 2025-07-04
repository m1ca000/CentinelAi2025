/*
  Warnings:

  - Added the required column `photo` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "photo" TEXT NOT NULL;
