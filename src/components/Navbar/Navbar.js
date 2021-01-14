import React from 'react';
import Logo from '../../assets/image/logo.jpg';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar() {

    return (
        <div className={styles.Container}>
            <div className={styles.ContainerLogo}>
                <img src={Logo} alt="Logo Taspen" title="Taspen Logo"></img>
            </div>
            <div className={styles.Navbar}>
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <li disabled>Pages</li>
                    <li>Politics</li>
                    <li>Breaking News</li>
                    <li>Business</li>
                    <li>Health</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;