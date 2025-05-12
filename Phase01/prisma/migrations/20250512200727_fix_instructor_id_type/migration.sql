/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Account" ("access_token", "expires_at", "id", "id_token", "provider", "providerAccountId", "refresh_token", "scope", "session_state", "token_type", "type", "userId") SELECT "access_token", "expires_at", "id", "id_token", "provider", "providerAccountId", "refresh_token", "scope", "session_state", "token_type", "type", "userId" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");
CREATE TABLE "new_CompletedCourse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "crn" INTEGER NOT NULL,
    "creditHours" INTEGER NOT NULL,
    "grade" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "instructor" TEXT,
    CONSTRAINT "CompletedCourse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CompletedCourse" ("category", "courseId", "creditHours", "crn", "grade", "id", "instructor", "name", "userId") SELECT "category", "courseId", "creditHours", "crn", "grade", "id", "instructor", "name", "userId" FROM "CompletedCourse";
DROP TABLE "CompletedCourse";
ALTER TABLE "new_CompletedCourse" RENAME TO "CompletedCourse";
CREATE TABLE "new_Course" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "crn" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "openForRegistration" BOOLEAN NOT NULL,
    "adminApprove" BOOLEAN NOT NULL,
    "totalSeats" INTEGER NOT NULL,
    "availableSeats" INTEGER NOT NULL,
    "hasStarted" BOOLEAN NOT NULL,
    "creditHours" INTEGER NOT NULL,
    "isPublishedForInstructors" BOOLEAN,
    "assignmentConfirmed" BOOLEAN NOT NULL,
    "interestDeadline" DATETIME NOT NULL,
    "scheduleId" INTEGER NOT NULL,
    "assignedInstructorId" TEXT,
    CONSTRAINT "Course_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Course_assignedInstructorId_fkey" FOREIGN KEY ("assignedInstructorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Course" ("adminApprove", "assignedInstructorId", "assignmentConfirmed", "availableSeats", "category", "creditHours", "crn", "description", "hasStarted", "id", "instructor", "interestDeadline", "isPublishedForInstructors", "name", "openForRegistration", "scheduleId", "totalSeats") SELECT "adminApprove", "assignedInstructorId", "assignmentConfirmed", "availableSeats", "category", "creditHours", "crn", "description", "hasStarted", "id", "instructor", "interestDeadline", "isPublishedForInstructors", "name", "openForRegistration", "scheduleId", "totalSeats" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
CREATE UNIQUE INDEX "Course_crn_key" ON "Course"("crn");
CREATE UNIQUE INDEX "Course_scheduleId_key" ON "Course"("scheduleId");
CREATE TABLE "new_Expertise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Expertise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Expertise" ("id", "userId", "value") SELECT "id", "userId", "value" FROM "Expertise";
DROP TABLE "Expertise";
ALTER TABLE "new_Expertise" RENAME TO "Expertise";
CREATE TABLE "new_Responsibility" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Responsibility_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Responsibility" ("id", "userId", "value") SELECT "id", "userId", "value" FROM "Responsibility";
DROP TABLE "Responsibility";
ALTER TABLE "new_Responsibility" RENAME TO "Responsibility";
CREATE TABLE "new_Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Session" ("expires", "id", "sessionToken", "userId") SELECT "expires", "id", "sessionToken", "userId" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
CREATE TABLE "new__InterestedCourses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_InterestedCourses_A_fkey" FOREIGN KEY ("A") REFERENCES "Course" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_InterestedCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__InterestedCourses" ("A", "B") SELECT "A", "B" FROM "_InterestedCourses";
DROP TABLE "_InterestedCourses";
ALTER TABLE "new__InterestedCourses" RENAME TO "_InterestedCourses";
CREATE UNIQUE INDEX "_InterestedCourses_AB_unique" ON "_InterestedCourses"("A", "B");
CREATE INDEX "_InterestedCourses_B_index" ON "_InterestedCourses"("B");
CREATE TABLE "new__RegisteredCourses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_RegisteredCourses_A_fkey" FOREIGN KEY ("A") REFERENCES "Course" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_RegisteredCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__RegisteredCourses" ("A", "B") SELECT "A", "B" FROM "_RegisteredCourses";
DROP TABLE "_RegisteredCourses";
ALTER TABLE "new__RegisteredCourses" RENAME TO "_RegisteredCourses";
CREATE UNIQUE INDEX "_RegisteredCourses_AB_unique" ON "_RegisteredCourses"("A", "B");
CREATE INDEX "_RegisteredCourses_B_index" ON "_RegisteredCourses"("B");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
