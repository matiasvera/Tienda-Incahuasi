import React from 'react';
import "./styles.scss";

const Nav = () => {
    return (
        <nav className="nav">
            <h1 className="titulo">Incahuasi Expediciones</h1>
            <ul className="navContainer">
                <li className="list"><a href="#">Actividades</a></li>
                <li className="list"><a href="#">Quienes Somos</a></li>
                <li className="list"><a href="#">Contacto</a></li>
            </ul>
        </nav>
            
        
    )
}

export default Nav
