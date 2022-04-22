import React from 'react'
import { Link, NavLink, useNavigate} from 'react-router-dom'
import MangoChango from '../../assets/mc_logo.png';
export const Navbar = () => {
    const navigate= useNavigate();
    const handleLogout=()=>{
        navigate('/login',{
            replace: true
        });
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark" id="navbar-mangochango">
            <img src={MangoChango} width="175" height="45" alt=""/>
            <Link 
                className="navbar-brand" 
                to="/"
            >
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={({isActive})=>'nav-item nav-link '+(isActive ? 'active':'')} 
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink 

                        className={({isActive})=>'nav-item nav-link '+(isActive ? 'active':'')}
                        to="/users"
                    >
                        Users
                    </NavLink>
                    <NavLink 
                        className={({isActive})=>'nav-item nav-link '+(isActive ? 'active':'')}
                        to="/stores"
                    >
                        Stores
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end mr-3">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        Manuel Fuentes
                    </span>
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}