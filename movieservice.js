import express from 'express'
import { pgPool } from './connections.js'

var app = express()

app.listen(3001, () => {
    console.log('Server in running...')
})

getMovies()

async function getMovies() { 
    try{
        const response = await pgPool.query("SELECT * FROM movie ")
        console.log(response)
    }catch(err){
        console.log(err.message);
    }  
}

app.get('/', (req,res)=> {

})

app.get('/user', (req,res)=> {
 
})

app.get('/movie', (req,res)=> {
        
})

app.get('/genre', (req,res)=> {
    
})

app.get('/favorite_movie', (req,res)=> {
    
})

app.get('/rating', (req,res)=> {
    
})

