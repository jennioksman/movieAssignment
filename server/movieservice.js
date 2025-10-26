import express from 'express'
import cors from 'cors'
import { pgPool } from './connections.js'

var app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(3001, () => {
    console.log('Server in running...')
})

//Registering a new user
app.post('/users/register', async (req,res) => {
    try {
        let name = req.body.name
        let username = req.body.username
        let password = req.body.password
        let year = req.body.year_of_birth
        
        const response = await pgPool.query('INSERT INTO users (name, username, password, year_of_birth) VALUES ($1, $2, $3, $4)', [name, username, password, year])
        res.send('New user registered')
    } catch (error) {
        console.log(error)
    }
})

//Adding a new movie
app.post('/movie', async (req,res) => {
    try{
        let name = req.body.name
        let year = req.body.year
        let genre = req.body.genre
        const response = await pgPool.query('INSERT INTO movie (name, year, genre) VALUES ($1, $2, $3)', [name, year, genre])
        // Return JSON and a 201 status
        res.status(201).json({ message: 'Movie added!' })
    }catch (error) {
        console.log(error.message)
        // Return error JSON and 500 so client can surface it
        res.status(500).json({ error: error.message || 'Internal server error' })
    }
})

//Getting all movies
app.get('/movie', async (req,res)=> {
    try{
        const response = await pgPool.query("SELECT * FROM movie ")
        res.json(response.rows)
    }catch(error){
        console.log(error.message)
    }  
})

//Getting movie by keyword
app.get('/movie/search', async (req,res) => {
    try {
        const {keyword} = req.query
        const response = await pgPool.query( 'SELECT * FROM movie WHERE name ILIKE $1', [`%${keyword}%`])
        res.json(response.rows)
    }catch(error){
        console.log(error.message)
    }
})

//Getting movie by id
app.get('/movie/:id', async (req,res)=> {
    try{
        const {id} = req.params
        const response = await pgPool.query('SELECT name, year, genre FROM movie WHERE id=$1', [id])
        res.json(response.rows)
    }catch(error){
        console.log(error.message)
    }  
})

//Deleting movie by id
app.delete('/movie/remove', async (req,res) => {
    try{
        let {id} = req.body
        const response = await pgPool.query('DELETE FROM movie WHERE id=($1)', [id])   
        res.send('Movie removed!')
        
    }catch(error){  
        res.status(400).send('Unable to remove a movie being favourit or reviewed.')  
    } 
})

//Adding a new genre
app.post('/genre', async (req,res) => {
    try {
        let genre = req.body.name
        const response = await pgPool.query('INSERT INTO genre (name) VALUES ($1)', [genre])
        console.log(genre)
        res.send('Genre added.')
    } catch (error) {
        console.log(error)
    }
})

//Getting favourite movie by username
app.get('/user/:username/favourite_movie', async (req,res) => {
    try {
        const {username} = req.params
        const response = await pgPool.query(
            "SELECT users.username, movie.name FROM users, movie, favourite_movie WHERE users.id=favourite_movie.users AND movie.id=favourite_movie.movie AND users.username=$1", [username])
        res.json(response.rows)
    } catch (error) {
        console.log(error.message)
    }
})

//Adding favourite movie for user
app.post('/user/favourite_movie', async (req,res) => {
    try {
        let user = req.body.username
        let movie = req.body.name

        const movieResponse = await pgPool.query('SELECT id, name FROM movie WHERE name=$1', [movie])
        const movieId = movieResponse.rows[0].id

        const userResponse = await pgPool.query('SELECT id, username FROM users WHERE username=$1', [user])
        const userId = userResponse.rows[0].id

        const response = await pgPool.query('INSERT INTO favourite_movie (movie, users) VALUES ($1, $2)', [movieId, userId])
        res.send('Favourite movie added.')
    }catch(error){
        console.log(error.message) 
    }
})

//Adding movie review
app.post('/rating', async (req,res) => {
    try {
        let username = req.body.username
        let movie = req.body.name
        let stars = req.body.stars
        let text = req.body.review_text
        const response = await pgPool.query('SELECT id, username FROM users WHERE username=$1', [username])
        const userId = response.rows[0].id

        const result = await pgPool.query('SELECT id, name FROM movie WHERE name=$1', [movie])
        const movieId = result.rows[0].id

        const reviewResult = await pgPool.query('INSERT INTO review (movie, users, stars, review_text) VALUES ($1, $2, $3, $4)', [movieId, userId, stars, text])
        console.log(reviewResult)
        res.send('Thank you for your review!')
    } catch (error) {
        console.log(error.message)
    }
})


