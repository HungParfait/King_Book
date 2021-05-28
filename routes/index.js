const homePageRouter = require('./home_page');
const categoryRouter = require('./category');
const searchRouter = require('./search');
const pageRouter = require('./page')
const listRouter = require('./list');
const loginRouter = require('./login');
const login = require('../app/controllers/loginEmail')
const signup = require('../app/controllers/SignUp')
const setup = require('../app/controllers/Setup')


function route(app) {
    app.get('/home', homePageRouter)
    app.get('/books/:category', categoryRouter)
    app.get('/search/result', searchRouter)
    app.get('/search/result/page', pageRouter)
    app.get('/list/:category',listRouter);
    app.get('/login/google-oauth',loginRouter)
    app.get('/login/email', login.getMethod)
    app.post('/login/email',login.postMethod)
    app.get('/signup', signup.getMethod)
    app.post('/signup',signup.postMethod)
    app.get('/setup',setup.getMethod)
}



module.exports = route;