const { engine } = require("express-handlebars");

function initHandlebars(app) {
    app.engine('hbs', engine({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
}
module.exports = initHandlebars;