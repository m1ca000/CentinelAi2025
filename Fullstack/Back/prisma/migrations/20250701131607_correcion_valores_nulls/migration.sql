-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_institutionID_fkey";

-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "institutionID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_institutionID_fkey" FOREIGN KEY ("institutionID") REFERENCES "Institution"("inst_ID") ON DELETE SET NULL ON UPDATE CASCADE;
