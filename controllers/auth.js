const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('../config/ppConfig.js')
const user = require('../models/user')

router.get('/signup', (req, res) => {
    res.render('auth/signup')
})

router.post('/signup', (req, res) => {
    //find or create a new user
    db.user.findOrCreate({
        where: {
            email: req.body.email
        },
        defaults: {
            name: req.body.name,
            password: req.body.password,
            wins: 0,
            losses: 0,
            draws: 0
        }
    })
    .then(([user, wasCreated]) => {
        if(wasCreated) {
            passport.authenticate('local', {
                successRedirect: '../profile',
                successFlash: ''
            })(req, res)
        } else {
            req.flash('error', 'An account associated with that email address already exists. Did you mean to log in?')
            res.redirect('/auth/login')
        }
    })
    .catch(err => {
        req.flash('error', err.message)
        res.redirect('/auth/signup')
    })
})

router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/auth/login',
    successRedirect: '../profile',
    successFlash: '',
    failureFlash: 'Invalid email or password :('
}))
    
router.get('/logout', (req, res) => {
    db.user_ship.destroy({
        where: {
            userId: req.user.id
        }
    })
    req.logout()
    res.redirect('/')
})

router.delete('/delete/:id', (req, res) => {
    db.user.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect('/')
})

router.post('/update/win', (req,res) => {
    db.user.findOne({
        where: {
            id: req.user.id
        }
    }).then(user => {
        user.wins = user.wins + 1
        user.save().then(()=>{
            res.send('Star Wars!!!')
        })
    })
})

router.post('/update/loss', (req,res) => {
    db.user.findOne({
        where: {
            id: req.user.id
        }
    }).then(user => {
        user.losses = user.losses + 1
        user.save().then(()=>{
            res.send('Star Wars!!!')
        })
    })
})

router.post('/update/draw', (req,res) => {
    db.user.findOne({
        where: {
            id: req.user.id
        }
    }).then(user => {
        user.draws = user.draws + 1
        user.save().then(()=>{
            res.send('Star Wars!!!')
        })
    })
})

module.exports = router