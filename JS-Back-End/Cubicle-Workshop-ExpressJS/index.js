const express = require('express');
const initDatabase = require('./config/database');
const routes = require('./config/routes')
const app = express();
const PORT = 5000;

require('./config/handlebars')(app);
app.use(express.urlencoded({extended: false}))

app.use('/static', express.static('static'))
app.use(routes)
app.get('*', (req, res) => {
    res.render('404')
})

//Set database and run server
initDatabase()
.then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
})
.catch(err => {
    console.log(`Application init failed: ${err}`)
})

// TO DO: Search 