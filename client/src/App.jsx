import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/movie')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Movie List</h1>
      {loading && <p>Loading movies...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id || movie.movie_id}>
            {(movie.title || movie.name || 'Unknown Title')} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
