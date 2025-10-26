import { useEffect, useState } from 'react'
import { getMovies } from '../api/api'

export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const data = await getMovies()
        if (mounted) setMovies(data)
      } catch (err) {
        if (mounted) setError(err.message || 'Error')
      } finally {
        if (mounted) setLoading(false)
      }
    })()
    return () => { mounted = false }
  }, [])

  if (loading) return <div>Loading movies…</div>
  if (error) return <div>Error: {error}</div>
  if (!movies.length) return <div>No movies found.</div>

  return (
    <ul>
      {movies.map(m => (
        <li key={m.id ?? `${m.name}-${m.year}`}>
          <strong>{m.name}</strong> ({m.year}) — {m.genre}
        </li>
      ))}
    </ul>
  )
}