const Model = require('../models/model')
const View = require('../views/view')

class Controller {
  static queryOne() {
    Model.readQueryOne((err, data) => {
      if(err) {
        View.showError(err)
      } else {
        View.showQueryOne(data)
      }
    })
  }
}


module.exports = Controller