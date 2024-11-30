import express from 'express'
import { pgPool } from './connections'

var app = express()

app.listen(3001, () => {
    console.log('Server in running...')
})

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