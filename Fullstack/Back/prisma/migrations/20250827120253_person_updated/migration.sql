/*
  Warnings:

  - Added the required column `status` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Person" ADD COLUMN     "status" TEXT NOT NULL;
