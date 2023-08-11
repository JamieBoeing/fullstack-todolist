require('dotenv').config()
require('./config/database') // direct path to run the mongo db database


const app = require('./app-server')

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
	console.log(`I am listening on ${PORT}, and can hear you loud and clear!`)
})







