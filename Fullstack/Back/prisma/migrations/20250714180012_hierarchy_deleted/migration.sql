/*
  Warnings:

  - You are about to drop the column `hierarchyID` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the `Hierarchy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_hierarchyID_fkey";

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "hierarchyID";

-- DropTable
DROP TABLE "Hierarchy";
