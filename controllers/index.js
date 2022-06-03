const router = require('express').Router();

router.get ('/', (req,res) => {
    res.render('homepage');
})
router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/signup', (req, res) => {
    res.render('signup');
})
router.use((req, res) => {
    res.status(404).end();
});
  
module.exports = router;