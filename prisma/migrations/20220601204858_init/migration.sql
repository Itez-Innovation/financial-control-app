-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "CPF" VARCHAR(14) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cashInflow" (
    "id" TEXT NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Valor" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "account_id" TEXT NOT NULL,

    CONSTRAINT "cashInflow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cashOutflow" (
    "id" TEXT NOT NULL,
    "Area" TEXT NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Valor" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "account_id" TEXT NOT NULL,

    CONSTRAINT "cashOutflow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refreshToken" (
    "id" TEXT NOT NULL,
    "refToken" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,

    CONSTRAINT "refreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_accountTopermissions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_accountToroles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "account_CPF_key" ON "account"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "cashOutflow_Area_key" ON "cashOutflow"("Area");

-- CreateIndex
CREATE UNIQUE INDEX "refreshToken_account_id_key" ON "refreshToken"("account_id");

-- CreateIndex
CREATE UNIQUE INDEX "_accountTopermissions_AB_unique" ON "_accountTopermissions"("A", "B");

-- CreateIndex
CREATE INDEX "_accountTopermissions_B_index" ON "_accountTopermissions"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_accountToroles_AB_unique" ON "_accountToroles"("A", "B");

-- CreateIndex
CREATE INDEX "_accountToroles_B_index" ON "_accountToroles"("B");

-- AddForeignKey
ALTER TABLE "cashInflow" ADD CONSTRAINT "cashInflow_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashOutflow" ADD CONSTRAINT "cashOutflow_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refreshToken" ADD CONSTRAINT "refreshToken_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_accountTopermissions" ADD CONSTRAINT "_accountTopermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_accountTopermissions" ADD CONSTRAINT "_accountTopermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_accountToroles" ADD CONSTRAINT "_accountToroles_A_fkey" FOREIGN KEY ("A") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_accountToroles" ADD CONSTRAINT "_accountToroles_B_fkey" FOREIGN KEY ("B") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
