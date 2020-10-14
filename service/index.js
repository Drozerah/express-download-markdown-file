const debug = require('debug')('APP:service')

debug(__filename.replace(process.cwd(), ''))

module.exports.sayHello = () => {
  return console.log('Hello from service!') // !DEBUG
}

module.exports.createFile = (data) => {
  console.log(data) // !DEBUG
}