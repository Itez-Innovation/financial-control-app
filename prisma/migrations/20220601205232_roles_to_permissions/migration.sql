-- CreateTable
CREATE TABLE "_permissionsToroles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_permissionsToroles_AB_unique" ON "_permissionsToroles"("A", "B");

-- CreateIndex
CREATE INDEX "_permissionsToroles_B_index" ON "_permissionsToroles"("B");

-- AddForeignKey
ALTER TABLE "_permissionsToroles" ADD CONSTRAINT "_permissionsToroles_A_fkey" FOREIGN KEY ("A") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_permissionsToroles" ADD CONSTRAINT "_permissionsToroles_B_fkey" FOREIGN KEY ("B") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
