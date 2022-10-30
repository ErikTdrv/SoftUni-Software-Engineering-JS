const express = require('express');
const { authMiddleware }= require('./middlewares/authMiddleware')
const app = express();

const cookieParser = require('cookie-parser');
const initDatabase = require('./configs/initDatabase');
const router = require('./routes');

app.use('/static', express.static('static'))
require('./configs/initHandlebars')(app);
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))
app.use(authMiddleware)  // FOR USE
app.use(router)

//Starting server and connecting database
initDatabase()
.then(() => {
    console.log('Database connected')
    app.listen(3000, () => console.log('Server is running on PORT 3000!'))
})
.catch(err => console.log(err))