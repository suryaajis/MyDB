const pool = require('../config/connection')
const fs = require('fs')
const {Politician} = require('./class')


class Model {
  static readQueryOne(cb) {
    const queryOne = `
    SELECT id, "name", "party", CAST("grade_current" AS FLOAT) FROM "Politicians"
    WHERE "party" = 'R'  AND "grade_current" BETWEEN '9' AND '11'
    `

    pool.query(queryOne, (err, res) => {
      if(err) {
        cb(err)
      } else {
        res = res.rows.map(politician => {
          let {id, name, party, grade_current} = politician
          return new Politician(id, name, party, null, grade_current)
        })
        cb(null, res)
      }
    })
    
  }
}


module.exports = Model