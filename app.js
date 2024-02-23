const express = require('express')

const myapp = express()

myapp.get('/', (req, res) => {
  const todayDate = new Date()
  const formattedDate = `${todayDate.getDate()}-${
    todayDate.getMonth() + 1
  }-${todayDate.getFullYear()}`
  res.send(formattedDate)
})

myapp.listen(3000)

module.exports = myapp

/*const express = require('express')
const {addDays, format} = require('date-fns')

const myapp = express()

myapp.get('/', (req, res) => {
  const todayDate = new Date()
  const formattedDate = `${todayDate.getDate()}-${
    todayDate.getMonth() + 1
  }-${todayDate.getFullYear()}`
  res.send(formattedDate)
})

myapp.listen(3000)

module.exports = myapp
*/
