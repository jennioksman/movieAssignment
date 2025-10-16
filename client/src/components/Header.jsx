import headerbg from '../assets/movie.jpg'

export default function Header() {
  return (
    <div className="header flex items-center justify-center h-100 mb-4"
      style={{ backgroundImage: `url(${headerbg})`, backgroundSize: "100%" }} >
      <h1 className=''>Movie Database</h1>
    </div>
  )
}