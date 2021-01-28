require('dotenv').config() // configures environment variables
const db = require('./models')
const express = require('express')
const axios = require('axios')
const ejsLayouts = require('express-ejs-layouts')
const app = express()
const session = require('express-session')
const passport = require('./config/ppConfig.js')
const flash = require('connect-flash')
const isLoggedIn = require('./middleware/isLoggedIn.js')
const methodOverride = require('method-override')

// set the view engine to ejs
app.set('view engine', 'ejs')
// tells the app to use ejs layouts
app.use(ejsLayouts)

// links style.css to layout.ejs
app.use(express.static(__dirname + '/public'))

// body parser middleware (allows us to receive form data in req.body)
app.use(express.urlencoded({extended: false}))

// middleware to delete user account
app.use(methodOverride('_method'))

// session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// flash middleware
app.use(flash())

// CUSTOM MIDDLEWARE
app.use((req, res, next) => {
// before every route, attach the flash message and current user to res.locals
    res.locals.alerts = req.flash()
    res.locals.currentUser = req.user
    next() // move on to the next piece of middleware
})

// controller middleware
app.use('/auth', require('./controllers/auth'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/battle/:id', isLoggedIn, (req, res) => {
    db.user.findOne({
        where: {
            id: req.params.id
        },
        include: [db.ship]
    }).then(foundUser => {
        res.render('battle', {foundUser})
    })
    
})

app.get('/build', isLoggedIn, (req, res) => {
    let starwarsUrl = 'https://swgoh.gg/api/ships'
    axios.get(starwarsUrl).then(apiResponse => {
        let ships = apiResponse.data
        res.render('build', { ships: ships })
    })
})

app.post('/ship', function (req, res) {
    db.user.findOne({
        where: {
            id: req.user.id
        },
        include: [db.ship]
    }).then(user => {
        if(user.ships.length < 4) {
            db.ship.findOrCreate({
                where: {
                    name: req.body.name,
                    power: req.body.power,
                    role: req.body.role,
                    pic: req.body.pic
                }
            }).then(([ship, wasCreated]) => {
                ship.addUser(user)
                res.redirect('build')
            })
        } else {
            db.ship.findOrCreate({
                where: {
                    name: req.body.name,
                    power: req.body.power,
                    role: req.body.role,
                    pic: req.body.pic
                }
            }).then(([ship, wasCreated]) => {
                ship.addUser(user)
                res.redirect(`/battle/${user.id}`)
            })
        }
    })
})

app.get('/profile', isLoggedIn, (req, res) => {
    db.user_ship.destroy({
        where: {
            userId: req.user.id
        }
    })
    res.render('profile')
})

app.get('*', (req, res) => {
    res.render('404.ejs')
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})