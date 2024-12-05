import express from 'express'
import { pgPool } from './connections.js'

var app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(3001, () => {
    console.log('Server in running...')
})


app.post('/user/register', async (req,res) => {
    try {
        let name = req.body.name
        let username = req.body.username
        let password = req.body.password
        let year = req.body.year
        
        const response = await pgPool.query('INSERT INTO users (name, username, password, year_of_birth) VALUES ($1, $2, $3, $4)', [name, username, password, year])
        console.log(req.body)
        res.send(response.rows)
    } catch (error) {
        console.log(error)
    }
})

app.post('/movie', async (req,res) => {
    try{
        let name = req.body.name
        let year = req.body.year
        let genre = req.body.genre
        const response = await pgPool.query('INSERT INTO movie (name, year, genre) VALUES ($1, $2, $3)', [name, year, genre])
        console.log(req.body)
        res.send(response.rows)
    }catch (error) {
        console.log(error)
    }
})

app.get('/movie', async (req,res)=> {
    try{
        const response = await pgPool.query("SELECT * FROM movie ")
        res.json(response.rows)
    }catch(err){
        console.log(err.message)
    }  
})

app.get('/movie/search', async (req,res) => {
    try {
        const {keyword} = req.query
        const response = await pgPool.query( 'SELECT name FROM movie WHERE name ILIKE $1', [`%${keyword}%`])
        res.json(response.rows)
    }catch(err){
        console.log(err.message)
    }
})

app.get('/movie/:id', async (req,res)=> {
    try{
        const {id} = req.params
        const response = await pgPool.query('SELECT name, year, genre FROM movie WHERE id=$1', [id])
        res.json(response.rows)
    }catch(err){
        console.log(err.message)
    }  
})

app.delete('/movie/:id', async (req,res) => {
    try{
        
    }catch(err){
        console.log(err.message)
    }  
})

app.post('/genre', async (req,res) => {
    try {
        let genre = req.body.genre
        const response = await pgPool.query('INSERT INTO genre (name) VALUES ($1)', [genre])
        console.log(genre)
        res.send(response.rows)
    } catch (error) {
        console.log(error)
    }
})

app.get('/user/:username/favorite_movie', async (req,res) => {
    try {
        
    } catch (error) {
        
    }
})

app.post('/user/:username/favorite_movie', async (req,res) => {
    try {
      
    } catch (error) {
        
    }
})

app.post('/rating/', async (req,res) => {
    try {
        const {username} = req.body
        const {movie, stars, review_text} = req.body
        const response = await pgPool.query('SELECT id, username FROM users WHERE username=$1', [username])
        const userId = response.rows[0].id

        const result = await pgPool.query('SELECT id FROM movie WHERE name=$1', [movie])
        const movieId = result.rows[0].id

        const reviewResult = await pgPool.query('INSERT INTO review (movie, users, stars, review_text) VALUES ($1, $2, $3, $4)', [movieId, userId, stars, review_text])
        console.log(reviewResult)
        res.send(reviewResult.rows)
    } catch (error) {
        
    }
})

