/*
  Warnings:

  - You are about to drop the `movie   rent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "movie   rent";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "movie rent" (
    "userID" TEXT NOT NULL,
    "movieID" TEXT NOT NULL,

    PRIMARY KEY ("userID", "movieID"),
    CONSTRAINT "movie rent_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "movie rent_movieID_fkey" FOREIGN KEY ("movieID") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
