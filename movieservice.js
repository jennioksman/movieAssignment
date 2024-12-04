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

app.get('/movie/id', async (req,res)=> {
    try{
        
    }catch(err){
        
    }  
})

app.get('/movie/keyword', async (req,res) => {
    try {
        
    } catch (error) {
        
    }
})

app.delete('/movie/id', async (req,res) => {
    try{
        const response = await pgPool.query("SELECT * FROM movie ")
        res.json(response.rows)
    }catch(err){
        console.log(err.message);
    }  
})

app.post('/genre', async (req,res) => {
    try {
        
    } catch (error) {
        
    }
})

app.get('/user/{username}/favorite_movie', async (req,res) => {
    try {
        
    } catch (error) {
        
    }
})

app.post('/user/{username}/favorite_movie', async (req,res) => {
    try {
        
    } catch (error) {
        
    }
})

app.post('/rating', async (req,res) => {
    try {
        
    } catch (error) {
        
    }
})

