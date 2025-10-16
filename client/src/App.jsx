import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import NavigationBar from './components/Navigation'
import Home from './pages/Home'
import AddMovie from './pages/AddMovie'
import Favourites from './pages/Favourites'
import Register from './pages/Register'
import Movies from './pages/Movies'
import Footer from './components/Footer'

import './styles/App.css'

const router = createBrowserRouter([
        {
            path: '/',
            element: <NavigationBar />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/addmovie',
                    element: <AddMovie />
                },
                {
                    path: '/favourites',
                    element: <Favourites />
                },
                {
                    path: '/movies',
                    element: <Movies />
                },
                {
                    path: '/register',
                    element: <Register />
                }
            ]
        }
    ])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
