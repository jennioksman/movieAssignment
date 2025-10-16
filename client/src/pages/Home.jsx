import React from 'react'
import '../styles/App.css'
import Header from '../components/Header'

function Home() {
  return (
    <div>
      <Header />
      <h1 className='text-9xl'>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
    </div>
  )
}

export default Home

