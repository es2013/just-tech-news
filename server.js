const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

//handlebar template engine
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
//session libraries
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//add ability to use public folder holding css. It allows it to take contents of a folder and server them as static assetes
app.use(express.static(path.join(__dirname,'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));



// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});