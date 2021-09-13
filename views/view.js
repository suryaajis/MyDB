class View {
  static showError(err) {
    console.error(err)
  }

  static showHelp() {
    console.log(`COMMAND LINE SCHOOL
===================
node school
node school help
node school read <teacher/student/subject>
node school add <teacher/student/subject> first_name, last_name, email, gender(male/female), birthdate`)
  }

  static showData(data) {
    console.table(data)
  }

  static successAddData(input, data) {
    if ( input.toLowerCase() === 'teacher') {
      console.log(`Success add ${input} with name ${data.first_name} ${data.last_name}`)
    } else if ( input.toLowerCase() === 'student') {
      console.log(`Success add ${input} with name ${data.first_name} ${data.last_name}`)
    } else if ( input.toLowerCase() === 'subject') {
      console.log(`Success add ${input} ${data.subject_name}`)
    }
  }

  static showQuery(data) {
    console.table(data)
  }
}


module.exports = View