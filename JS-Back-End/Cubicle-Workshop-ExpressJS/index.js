const express = require('express');
const app = express();
const PORT = 5000;
const router = require('./config/routes')

require('./config/handlebars')(app);
app.use('/static', express.static('static'))

app.all('/', (req, res) => {
    res.render('index')
})
app.use(router)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));