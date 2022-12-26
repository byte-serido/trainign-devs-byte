-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "release_date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "movie   rent" (
    "userID" TEXT NOT NULL,
    "movieID" TEXT NOT NULL,

    PRIMARY KEY ("userID", "movieID"),
    CONSTRAINT "movie   rent_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "movie   rent_movieID_fkey" FOREIGN KEY ("movieID") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_title_key" ON "movies"("title");
