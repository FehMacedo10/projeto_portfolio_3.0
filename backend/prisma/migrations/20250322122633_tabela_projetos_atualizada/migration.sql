/*
  Warnings:

  - You are about to drop the column `projetoId` on the `tecnologias` table. All the data in the column will be lost.
  - Added the required column `repositorio` to the `projetos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `projetos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tecnologias" DROP CONSTRAINT "tecnologias_projetoId_fkey";

-- AlterTable
ALTER TABLE "projetos" ADD COLUMN     "destaque" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "repositorio" TEXT NOT NULL,
ADD COLUMN     "tipo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tecnologias" DROP COLUMN "projetoId";
