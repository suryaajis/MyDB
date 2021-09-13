const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  let table = `
  <body style="text-align: center; color: black;">
    <h1 style="margin-top:10px;">Sunny School Web</h1>
    <hr>
    <ul style="list-style-type: none; margin-left: -20px;">
      <li><h2><a href="/teachers">Data Teachers</a></h2></li>
      <li><h2><a href="/students">Data Students</a></h2></li>
      <li><h2><a href="/subjects">Data Subjects</a></h2></li>
    </ul>
  </body>
  `
  res.send(table)
})

app.get('/teachers', (req, res) => {
  let dataTeachers = JSON.parse(fs.readFileSync('./data/teachers.json'))
  let tableData = ``

  for (let i = 0; i < dataTeachers.length; i++) {
    tableData += `
    <tr style="background-color:rgb(242, 242, 242);">
      <td>${dataTeachers[i].id}</td>
      <td>${dataTeachers[i].first_name}</td>
      <td>${dataTeachers[i].last_name}</td>
      <td>${dataTeachers[i].email}</td>
      <td>${dataTeachers[i].gender}</td>
    </tr>`
  }
  
  res.send(`
  <h1 style="text-align:center;">Data Teachers</h1>
  <p style="text-align:center; margin-top:-20px;">Sunny School</p>
  <table style="width:100%; border:1px solid black; text-align:center;">
    <tr style="background-color:lightblue;">
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Gender</th>
    </tr>
      ${tableData}
  </table><br>
  <a href="/">Back to home</a>`)
})


app.get('/students', (req, res) => {
  let dataStudents = JSON.parse(fs.readFileSync('./data/students.json'))
  let tableData = ''

  dataStudents.forEach(student => {
    tableData += `
    <tr style="background-color:rgb(242, 242, 242);">
      <td>${student.id}</td>
      <td>${student.first_name}</td>
      <td>${student.last_name}</td>
      <td>${student.email}</td>
      <td>${student.gender}</td>
      <td>${student.birthdate}</td>
    </tr>
    `
  })

  res.send(`
  <h1 style="text-align:center;">Data Students</h1>
  <p style="text-align:center; margin-top:-20px;">Sunny School</p>
  <table style="width:100%; border:1px solid black; text-align:center;">
    <tr style="background-color:lightblue;">
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Gender</th>
      <th>Birth Date</th>
    </tr>
      ${tableData}
  </table><br>
  <a href="/">Back to home</a>`)
})

app.get('/subjects', (req, res) => {
  let dataSubjects = JSON.parse(fs.readFileSync('./data/subjects.json', 'utf-8'))
  let tableData = ''

  dataSubjects.forEach(subject => {
    tableData += `
    <tr style="background-color:rgb(242, 242, 242);">
      <td>${subject.id}</td>
      <td>${subject.subject_name}</td>
    </tr>
    `
  })

  res.send(`
  <h1 style="text-align:center;">Data Students</h1>
  <p style="text-align:center; margin-top:-20px;">Sunny School</p>
  <table style="width:100%; border:1px solid black; text-align:center;">
    <tr style="background-color:lightblue;">
      <th>ID</th>
      <th>Subject Name</th>
    </tr>
      ${tableData}
  </table><br>
  <a href="/">Back to home</a>`)
})

app.listen(port, () => {
  console.log(`This app listening on port:`, port)
})