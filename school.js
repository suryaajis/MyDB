const Controller = require('./controllers/controller')

const command = process.argv[2]
const input = process.argv.slice(3)

switch (command) {
  case 'help':
    Controller.help()
    break;
  case 'read':
    Controller.read(input[0])
    break;
  case 'add':
    Controller.addData(input[0], input[1], input[2], input[3], input[4], input[5])
    break;
  case 'delete':
    console.log(`still maintenance`)
    break;
  case 'query-1':
    Controller.queryOne()
    break
  default:
    Controller.help()
    break;
}