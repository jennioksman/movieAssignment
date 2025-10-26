import React, { useState } from 'react'

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    genre: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/movie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const text = await response.text()
      let payload
      try { payload = text ? JSON.parse(text) : null } catch { payload = text }

      if (response.ok) {
        alert((payload && payload.message) || 'Movie added successfully!')
        setFormData({ name: '', year: '', genre: '' })
      } else {
        const serverMsg = (payload && (payload.error || payload.message)) || text || response.statusText
        alert('Failed to add movie: ' + serverMsg)
        console.error('Add movie failed:', response.status, serverMsg)
      }
    } catch (error) {
      console.error('Error adding movie:', error)
      alert('Network or unexpected error: ' + (error.message || error))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Movie name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="year"
        placeholder="Release year"
        value={formData.year}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Movie'}</button>
    </form>
  )
}

export default AddMovieForm
