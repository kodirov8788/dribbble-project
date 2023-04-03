import React from 'react'
import "./Navbar.css"
import { navdata } from "../../static_data"
function Navbar() {
    return (
        <div>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <ul>
                {
                    navdata.map(nav => (
                        <li key={nav.id}>
                            <a href="#">{nav.nav_name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar