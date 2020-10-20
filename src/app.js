const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()


// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') // __dirname is the path to the folder this file(app.js) lives in. which will be source directory
const partialPath = path.join(__dirname, '../templates/partials')

// setup handlers engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// setup static dicrectory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Murat Deveci'

    })
})


app.get('/home', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Murat Deveci'
    })
})


app.get('/weather', (req, res) => {

    if(!req.query.address){
        return res.send({
            error: 'no address here!'
        })
    }
    
    geocode(req.query.address, (error, {longitude, latitude} = {}) => {
        if(error){
            return res.send({ error })
        }
        
        forecast(longitude, latitude , (error, forecastData) => {
            if(error){
                return res.send({ error })
            }
            res.send({
                forecast: forecastData.forecast,
                location: forecastData.location,
                address: req.query.address
            })
        })
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'It"s Britney bitch!',
        name: 'Murat Deveci'
    })
})




app.get('/help', (req, res) => {
    res.render('help', {
        title: 'No help! Sorry :)',
        name: 'Your mom lol'
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        errorMessage: 'Who the hell is he or she tho?'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        errorMessage: 'Not found, BYE!'
    })  
})


app.listen(3000, () => {
    console.log('server is up on port')
})