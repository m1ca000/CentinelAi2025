-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_hierarchyID_fkey";

-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "hierarchyID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_hierarchyID_fkey" FOREIGN KEY ("hierarchyID") REFERENCES "Hierarchy"("hier_ID") ON DELETE SET NULL ON UPDATE CASCADE;
