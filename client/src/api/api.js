export async function getMovies() {
    const res = await fetch('/movie') // Vite proxy -> http://localhost:3001/movie
    if (!res.ok) {
        const text = await res.text().catch(() => res.statusText)
        throw new Error(text || 'Failed to fetch movies')
    }
    return res.json()
}