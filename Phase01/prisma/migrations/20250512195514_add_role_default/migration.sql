-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "role" TEXT DEFAULT 'student',
    "gpa" REAL,
    "major" TEXT,
    "creditsCompleted" INTEGER
);
INSERT INTO "new_User" ("creditsCompleted", "email", "gpa", "id", "major", "name", "password", "role") SELECT "creditsCompleted", "email", "gpa", "id", "major", "name", "password", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
