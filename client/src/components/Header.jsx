import headerbg from '../assets/movie.jpg'

export default function Header() {
  return (
    <div className="h-96 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${headerbg})` }} >
      <h1 className='text-6xl font-bold text-white drop-shadow-lg'>Movie Database</h1>
    </div>
  )
}