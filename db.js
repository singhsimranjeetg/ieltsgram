const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')

mongodb.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client
  const app = require('./app')
  let port = process.env.PORT || 80
  app.listen(port, () => console.log(`server is running on port ${port}`))
})