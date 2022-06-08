const router = require('express').Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
const withAuth = require('../utils/auth');

router.get ('/', (req,res) => {
    res.render('homepage');
})
router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/signup', (req, res) => {
    res.render('signup');
})
router.get('/dashboard', withAuth, (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn //Needed to regester loggedIn status on other pages
    });
})
router.use((req, res) => {
    res.status(404).end();
});
  
module.exports = router;