const Controller = require('./controllers/controller')
const command = process.argv[2]


if ( command === 'query-1') {
  Controller.queryOne()
} else if ( command === 'query-2') {
  Controller.queryTwo()
}