/*
  Warnings:

  - Changed the type of `startDate` on the `Company` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endDate` on the `Company` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `roles` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" ADD "newStartDate" VARCHAR(25) NOT NULL;
UPDATE "Company" SET "newStartDate" = TO_CHAR("startDate",'MON-DD-YYYY HH12:MIPM');
ALTER TABLE "Company" DROP COLUMN "startDate";
ALTER TABLE "Company" RENAME COLUMN "newStartDate" TO "startDate";

ALTER TABLE "Company" ADD "newEndDate" VARCHAR(25) NOT NULL;
UPDATE "Company" SET "newEndDate" = TO_CHAR("endDate",'MON-DD-YYYY HH12:MIPM');
ALTER TABLE "Company" DROP COLUMN "endDate";
ALTER TABLE "Company" RENAME COLUMN "newEndDate" TO "endDate";

ALTER TABLE "Company" ALTER COLUMN "roles" SET NOT NULL;


