/*
  Warnings:

  - You are about to drop the column `roles` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "roles";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "role";

-- CreateTable
CREATE TABLE "Title" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "roles" JSON NOT NULL,
    "companyName" VARCHAR(25),
    "projectName" VARCHAR(255),

    CONSTRAINT "Title_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

-- AddForeignKey
ALTER TABLE "Title" ADD CONSTRAINT "Title_companyName_fkey" FOREIGN KEY ("companyName") REFERENCES "Company"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Title" ADD CONSTRAINT "Title_projectName_fkey" FOREIGN KEY ("projectName") REFERENCES "Project"("name") ON DELETE SET NULL ON UPDATE CASCADE;
