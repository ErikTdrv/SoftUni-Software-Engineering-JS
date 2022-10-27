const express = require('express');
const app = express();
const router = require('./routes');
const cookieParser = require('cookie-parser');
const initDatabase = require('./configs/initDatabase');
const { authMiddleware } = require('./middlewares/authMiddleware');


require('./configs/initHandlebars')(app);
app.use(express.urlencoded({extended: true}))

app.use('/static', express.static('static'))
app.use(cookieParser())
app.use(authMiddleware)
// app.use(authMiddleware)
app.use(router)

//Set database and run server
initDatabase()
.then(() => {
    app.listen(3000, () => console.log(`Server listening on port 3000`))
})
.catch(err => {
    console.log(`Application init failed: ${err}`)
})