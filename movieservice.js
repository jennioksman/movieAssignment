import express from 'express'
import { pgPool } from './connections.js'

var app = express()

app.listen(3001, () => {
    console.log('Server in running...')
})


app.post('/user/register', async (req,res) => {
    try {
        
    } catch (error) {
        
    }
})

app.post('/movie', async (req,res) => {
    try {
        
    } catch (error) {
        
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
        
    } catch (error) {
        
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

app.post('/rating', async (req,res) => {
    try {
        
    } catch (error) {
        
    }
})

