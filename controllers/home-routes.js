const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');


router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'title',
        'content',
        'created_at'
      ]//,
      // include: [
    //     {
    //       model: Comment,
    //       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //       include: {
    //         model: User,
    //         attributes: ['username']
    //       }
    //     },
    //     {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   ]
    })
      .then(dbPostData => {
        // pass a single post object into the homepage template
        res.render('homepage', dbPostData[0]);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
router.get('/login', (req, res) => {
    res.render('login');
});
router.get('/signup', (req, res) => {
    res.render('signup');
});
router.get('/dashboard', withAuth, (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn //Needed to regester loggedIn status on other pages
    });
});

module.exports = router;