const Model = require('../models/model')
const View = require('../views/view')

class Controller {
  static help() {
    View.showHelp()
  }

  static read(input) {
    Model.readAll(input, (err, data) => {
      if(err) {
        View.showError(err)
      } else {
        View.showData(data)
      }
    })
  }

  static addData(input, name1, name2, email, gender, birthdate) {
    Model.addDataSchool(input, name1, name2, email, gender, birthdate, (err, data) => {
      if(err) {
        View.showError(err)
      } else {
        View.successAddData(input, data)
      }
    })
  }

  static queryOne() {
    Model.readQueryOne((err, data) => {
      if(err) {
        View.showError(err)
      } else {
        View.showQuery(data)
      }
    })
  }
}

module.exports = Controller