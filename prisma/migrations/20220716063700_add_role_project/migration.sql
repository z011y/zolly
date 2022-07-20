/*
  Warnings:

  - Made the column `startDate` on table `Company` required. This step will fail if there are existing NULL values in that column.
  - Made the column `endDate` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "startDate" SET NOT NULL,
ALTER COLUMN "endDate" SET NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "role" VARCHAR(25);
