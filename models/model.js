const fs = require('fs')
const pool = require('../config/connection')
const {Teacher, Student, Subject} = require('./class')

class Model {
  static readAll(input, cb) {
    if( input.toLowerCase() === 'teacher') {
      fs.readFile('./data/teachers.json', 'utf-8', (err, dataTeachers) => {
        if(err) {
          cb(err)
        } else {
          dataTeachers = JSON.parse(dataTeachers)

          cb(null, dataTeachers)
        }
      })
    } else if (input.toLowerCase() === 'student') {
      fs.readFile('./data/students.json', 'utf-8', (err, dataStudents) => {
        if(err) {
          cb(err)
        } else {
          dataStudents = JSON.parse(dataStudents)

          cb(null, dataStudents)
        }
      })
    } else if ( input.toLowerCase() === 'subject'){
      fs.readFile('./data/subjects.json', 'utf-8', (err, dataSubjects) => {
        if(err) {
          cb(err)
        } else {
          dataSubjects = JSON.parse(dataSubjects)

          cb(null, dataSubjects)
        }
      })
    }
  }

  // =========================== Add Data School ===============================
  static addDataSchool(input, name1, name2, email, gender, birthdate, cb) {
    Model.readAll(input, (err, data) => {
      if(err) {
        cb(err)
      } else {
        let newTeacher;
        let newStudent;
        let newSubject;

        if ( input.toLowerCase() === 'teacher') {
          if ( data.length === 0) {
            newTeacher = new Teacher(1, name1, name2, email, gender)
          } else {
            let nextId = data[data.length - 1].id + 1
            newTeacher = new Teacher(nextId, name1, name2, email, gender) 
          }
          data.push(newTeacher)
          
          fs.writeFile('./data/teachers.json', JSON.stringify(data, null, 2), (err) => {
            if(err) {
              cb(err)
            } else {
              cb(null, newTeacher)
            }
          })

        } else if ( input.toLowerCase() === 'student') {
          if ( data.length === 0) {
            newStudent = new Student(1, name1, name2, email, gender, birthdate)
          } else {
            let nextId = data[data.length - 1].id + 1
            newStudent = new Student(nextId, name1, name2, email, gender, birthdate) 
          }
          data.push(newStudent)
          
          fs.writeFile('./data/students.json', JSON.stringify(data, null, 2), (err) => {
            if(err) {
              cb(err)
            } else {
              cb(null, newStudent)
            }
          })

        } else {
          if ( data.length === 0) {
            newSubject = new Subject(1, name1)
          } else {
            let nextId = data[data.length - 1].id + 1
            newSubject = new Subject(nextId, name1) 
          }
          data.push(newSubject)
          
          fs.writeFile('./data/Subjects.json', JSON.stringify(data, null, 2), (err) => {
            if(err) {
              cb(err)
            } else {
              cb(null, newSubject)
            }
          })
        }
      }
    })
  }

  static readQueryOne(cb) {
    let readDatabase = `
    SELECT * FROM "Teachers"
    `

    pool.query(readDatabase, (err, res) => {
      if(err) {
        cb(err)
      } else {
        cb(null, res.rows)
      }
    })
  }
}

module.exports = Model