const router = require('express').Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

router.get ('/', (req,res) => {
    res.render('homepage');
})
router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/signup', (req, res) => {
    res.render('signup');
})
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
})
router.use((req, res) => {
    res.status(404).end();
});
  
module.exports = router;