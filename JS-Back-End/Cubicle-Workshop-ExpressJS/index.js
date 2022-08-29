const express = require('express');
const app = express();
const PORT = 5000;

require('./config/handlebars')(app);
app.use('/static', express.static('static'))
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));