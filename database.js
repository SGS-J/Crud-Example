const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/crud-test'
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
	console.log('DB is connected')
})

