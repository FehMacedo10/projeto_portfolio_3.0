-- AlterTable
ALTER TABLE "tecnologias" ADD COLUMN     "projetoId" INTEGER;

-- CreateTable
CREATE TABLE "projetos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagens" TEXT[],
    "nivel" INTEGER NOT NULL,

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tecnologias" ADD CONSTRAINT "tecnologias_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "projetos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
