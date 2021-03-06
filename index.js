const express = require('express')
const path = require('path');
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const db = require('./config/db')
const route = require('./routes/index.js');
const cors = require('cors');
const bodyParser = require('body-parser');
//connect to db

db.connect();
app.use(morgan('combined'))

app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))



app.use(express.static(path.join(__dirname,'public')))
app.use('/search',express.static(path.join(__dirname,'public')))
app.use('/login',express.static(path.join(__dirname,'public')))

app.engine('hbs', exphbs( {
  extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'))

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

