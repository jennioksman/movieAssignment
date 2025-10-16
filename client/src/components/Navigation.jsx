import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import AddMovie from '../pages/AddMovie'
import Favourites from '../pages/Favourites'
import Register from '../pages/Register'
import Movies from '../pages/Movies'


export default function NavigationBar() {



    return (
        <>
            <div className="flex-row navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">Movie DB</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/addmovie">Add Movie</Link></li>
                        <li><Link to="/favourites">Favourites</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}