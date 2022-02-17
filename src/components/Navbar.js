import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark bg-gradient">

                <Link
                    className="navbar-brand mx-2"
                    to="/"
                >
                    Starwars
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav mx-auto">

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/charapters"
                        >
                            Personajes
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            to="/search"
                        >
                            Buscar
                        </NavLink>
                    </div>
                </div>


            </nav>
        </div>
    )
}