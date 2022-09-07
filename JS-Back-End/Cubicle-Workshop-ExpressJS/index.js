const express = require('express');
const initDatabase = require('./config/database');
const app = express();
const PORT = 5000;

const cubeController = require('./config/routes')
const homeController = require('./controllers/homeController')

require('./config/handlebars')(app);
app.use(express.urlencoded({extended: false}))

app.use('/static', express.static('static'))

app.use(homeController)
app.use('/cube', cubeController)
app.get('*', (req, res) => {
    res.render('404')
})


initDatabase()
.then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
})
.catch(err => {
    console.log(`Application init failed: ${err}`)
})