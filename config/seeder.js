const pool = require('./connection')
const fs = require('fs')

// 1. seeding table teachers
// 2. seeding table students
// 3. seeding table subjects

/**
 * STEP
 * 1. ROOT DATA JSON
 * 2. Template Insert Query
 * 3. ForEach Values Template
 * 4. Intialization
 */

const dataTeachers = JSON.parse(fs.readFileSync('../data/teachers.json', 'utf-8'))
const dataStudents = JSON.parse(fs.readFileSync('../data/students.json', 'utf-8'))
const dataSubjects = JSON.parse(fs.readFileSync('../data/subjects.json', 'utf-8'))

// ==== Insert Teachers ====
let insertTeacherQuery = `
INSERT INTO "Teachers" ("first_name", "last_name", "email", "gender")
VALUES `

dataTeachers.forEach((teacher, index) => {
  let { id, first_name, last_name, email, gender} = teacher
  if(index === dataTeachers.length - 1 ) {
    insertTeacherQuery += `('${first_name}', '${last_name}', '${email}', '${gender}');`
  } else {
    insertTeacherQuery += `('${first_name}', '${last_name}', '${email}', '${gender}'), `
  }
});
// console.log(insertTeacherQuery)

// ==== Insert Students ====
let insertStudentQuery = `
INSERT INTO "Students" ("first_name", "last_name", "email", "gender", "birthdate")
VALUES `

dataStudents.forEach((student, index) => {
  let { id, first_name, last_name, email, gender, birthdate} = student
  if(index === dataStudents.length - 1 ) {
    insertStudentQuery += `('${first_name}', '${last_name}', '${email}', '${gender}', '${birthdate}');`
  } else {
    insertStudentQuery += `('${first_name}', '${last_name}', '${email}', '${gender}', '${birthdate}'), `
  }
});
// console.log(insertStudentQuery)

// ==== Insert Subjects ====
let insertSubjectQuery = `
INSERT INTO "Subjects" ("subject_name")
VALUES `

dataSubjects.forEach((subject, index) => {
  let {subject_name} = subject
  if(index === dataSubjects.length - 1 ) {
    insertSubjectQuery += `('${subject_name}');`
  } else {
    insertSubjectQuery += `('${subject_name}'), `
  }
})
// console.log(insertSubjectQuery)


// INITIALIZATION
pool.query(insertTeacherQuery, (err, res) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`Success insert file teachers`)

    pool.query(insertStudentQuery, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`Success insert file students`)

        pool.query(insertSubjectQuery, (err, res) => {
          if(err) {
            console.log(err)
          } else {
            console.log(`Success insert file subjects`)
          }
        })
      }
    })
  }
})