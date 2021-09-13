const pool = require('./connection')

// 1. create table politicians
// 2. create table voters
// 3. create table votes

const createTablePoliticians = `
CREATE TABLE IF NOT EXISTS "Politicians" (
  id SERIAL PRIMARY KEY,cd ..
  "name" VARCHAR NOT NULL,
  "party" VARCHAR NOT NULL,
  "location" VARCHAR NOT NULL,
  "grade_current" DECIMAL
);
`

const createTableVoters = `
CREATE TABLE IF NOT EXISTS "Voters" (
  id SERIAL PRIMARY KEY,
  "first_name" VARCHAR NOT NULL,
  "last_name" VARCHAR NOT NULL,
  "gender" VARCHAR NOT NULL,
  "age" INTEGER
);
`

const createTableVotes = `
CREATE TABLE IF NOT EXISTS "Votes" (
  id SERIAL PRIMARY KEY,
  "voterId" INTEGER,
  "politicianId" INTEGER,
  FOREIGN KEY ("voterId")
    REFERENCES "Voters" (id),
  FOREIGN KEY ("politicianId")
    REFERENCES "Politicians" (id)
);
`

pool.query(createTablePoliticians, (err, res) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`Success create table Politicians`)

    pool.query(createTableVoters, (err, res) => {
      if(err) {
        console.log(err)
      } else {
        console.log(`Success create table Voters`)

        pool.query(createTableVotes, (err, res) => {
          if(err) {
            console.log(err)
          } else {
            console.log(`Success create table Votes`)
          }
        })
      }
    }) 
  }
})