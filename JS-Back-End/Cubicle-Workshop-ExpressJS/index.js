const cookieParser = require('cookie-parser');
const express = require('express');
const initDatabase = require('./config/database');
const routes = require('./routes')
const app = express();
const PORT = 5000;

require('./config/handlebars')(app);
app.use(express.urlencoded({extended: true}))

app.use('/static', express.static('static'))
app.use(cookieParser())
app.use(routes)

//Set database and run server
initDatabase()
.then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
})
.catch(err => {
    console.log(`Application init failed: ${err}`)
})
