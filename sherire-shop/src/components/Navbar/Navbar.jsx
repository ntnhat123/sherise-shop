import React from "react";
import { useState } from "react";
import "./navbar.css";
import logoHome from "../../assets/image/logo-home.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import Register from "../Register/Register";
const navbar = [
    {
        name: "Home",
        link: "/",
        current: true
    }
    ,{
        name: "Contact us",
        link: "/contact-us",
        current: false
    }
    ,{
        name: "Devlopment",
        link: "/devlopment",
        current: false
    }
    ,{
        name: "Scholarship",
        link: "/scholarship",
        current: false
    }
]


function MenuDropDown(){
    const [isOpened, setIsOpened] = useState(false);
    const toggle = () => {
        setIsOpened(!isOpened);
    }
    
    return (
        <div className="menu-dropdown">
            <button className="menu-dropdown__toggle" onClick={toggle}>
                {isOpened ? <FaTimes className="nav-close-btn"/> : <FaBars />}
            </button>
            {isOpened && (
                <ul className="menu-dropdown__list">
                    <li>
                        <a href="/" className="menu-dropdown__list__item">Home</a>
                    </li>
                    <li>
                        <a href="/contact-us" className="menu-dropdown__list__item">Contact us</a>
                    </li>
                    <li>
                        <a href="/devlopment" className="menu-dropdown__list__item">Devlopment</a>
                    </li>
                    <li>
                        <a href="#" className="menu-dropdown__list__item">Departments</a>
                    </li>
                    <li className="menu-dropdown__list__item"><button><Link to='/login' key={<Login />}>
                                            Login
                                    </Link></button></li>
                    <li className="menu-dropdown__list__item"><button><Link to='/login' key={<Login />}>
                                            Register
                                    </Link></button></li>
                </ul>
            )}
        </div>
    )

}
const Navbar = () => {

    return (
        <div >
            <div className="nav-bar">
                <div className="nav-bar__logo">
                    <img className="img-logo" src={logoHome} alt="Docplanner Group" />
                </div>
                <div className="nav-bar__menu">
                    <ul className="nav-bar__menu__list">
                        {
                            navbar.map((el, i) => (
                                <li className="nav-bar__menu__list__item" key={i}>
                                    <a href={el.link} className={el.current ? "active" : "nav-bar__menu__list" }>{el.name}</a>
                                </li>
                            ))
                        }
                        <li className="nav-bar__menu__list__item"                               
                        >
                                <button>
                                    <Link to='/login' key={<Login />}>
                                            Login
                                    </Link>
                                </button>
                            </li>
                        <li className="nav-bar__menu__list__item"><button>
                                
                            <Link to='/register' key={<Register />}>
                                                Register
                                        </Link>
                                    </button></li>

                    </ul>
                </div>
                <MenuDropDown/>
            </div>
        </div>
    )
}

export default Navbar;