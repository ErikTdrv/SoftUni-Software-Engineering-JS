const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const initDatabase = require('./configs/initDatabase');
const router = require('./routes');

app.use(express.urlencoded({extended: true}))
require('./configs/initHandlebars')(app);
app.use(cookieParser());
app.use(router)
app.use('/static', express.static('static'))

//Starting server and connecting database
initDatabase()
    .then(() => {
        console.log('Database connected')
        app.listen(3000, () => console.log('Server is running on PORT 3000!'))
    })
    .catch(err => console.log(err))