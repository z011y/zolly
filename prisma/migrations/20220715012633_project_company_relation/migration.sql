/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "companyName" VARCHAR(25);

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_companyName_fkey" FOREIGN KEY ("companyName") REFERENCES "Company"("name") ON DELETE SET NULL ON UPDATE CASCADE;
