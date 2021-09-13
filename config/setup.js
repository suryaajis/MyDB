const pool = require('./connection')

// 1. create table teachers
// 2. create table students
// 3. create table subject

const createTeacherTable = `
CREATE TABLE IF NOT EXISTS "Teachers" (
  "id" SERIAL PRIMARY KEY, 
  "first_name" VARCHAR NOT NULL, 
  "last_name" VARCHAR NOT NULL, 
  "email" VARCHAR UNIQUE NOT NULL, 
  "gender" VARCHAR NOT NULL
  );
`

const createStudentTable = `
CREATE TABLE IF NOT EXISTS "Students" (
  "id" SERIAL PRIMARY KEY, 
  "first_name" VARCHAR NOT NULL, 
  "last_name" VARCHAR NOT NULL, 
  "email" VARCHAR UNIQUE NOT NULL, 
  "gender" VARCHAR NOT NULL, 
  "birthdate" DATE
  ); 
`

const createSubjectTable = `
CREATE TABLE IF NOT EXISTS "Subjects" (
  "id" SERIAL PRIMARY KEY, 
  "subject_name" VARCHAR NOT NULL
  ); 
`

pool.query(createTeacherTable, (err, res) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Success create table Teachers`)

    pool.query(createStudentTable, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`Success create table Students`)

        pool.query(createSubjectTable, (err, res) => {
          if (err) {
            console.log(err )
          } else {
            console.log(`Success create table Subjects`)
            pool.end()
          }
        })
      }
    })
  }
})

