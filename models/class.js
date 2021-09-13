class Teacher {
  constructor(id, first_name, last_name, email, gender) {
    this.id = id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.gender = gender
  }
}

class Student {
  constructor(id, first_name, last_name, email, gender, birthdate) {
    this.id = id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.gender = gender
    this.birthdate = birthdate
  }
}

class Subject {
  constructor(id, subject_name) {
    this.id = id
    this.subject_name = subject_name
  }
}

module.exports = {Teacher, Student, Subject}