const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// helpers
// second parameter is false - don't create a cookie, we are using tokens
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });


module.exports = function(app) {
    // app.get('/', function(req, res, next) {
    //     res.send(['Anabelle', 'Laurence', 'Marc-Antoine'])
    // });
    app.get('/', requireAuth, function(req, res) {
        res.send({hi: 'there'});
    });
    // requireSignIn middleware assigned to this route
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);


};