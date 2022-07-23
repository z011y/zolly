/*
  Warnings:

  - You are about to drop the column `projectName` on the `Title` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Title` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Title" DROP CONSTRAINT "Title_projectName_fkey";

-- DropIndex
DROP INDEX "Project_name_key";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "titleName" VARCHAR(255);

-- AlterTable
ALTER TABLE "Title" DROP COLUMN "projectName";

-- CreateIndex
CREATE UNIQUE INDEX "Title_name_key" ON "Title"("name");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_titleName_fkey" FOREIGN KEY ("titleName") REFERENCES "Title"("name") ON DELETE SET NULL ON UPDATE CASCADE;
