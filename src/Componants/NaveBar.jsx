import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../CSS/NaveBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavaBar = () => {
    const navegate = useNavigate();
    const [showNav, setShowNav] = useState(false); // State to toggle mobile navigation

    const onhome = () => {
        navegate('/');
    };

    const selector = useSelector((state) => state.Handelreducer);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <div className={style.Nave}>
            {/* Hamburger icon for mobile and tablet screens */}
            <div className={style.hamburger} onClick={toggleNav}>
                <div className={style.bar}></div>
                <div className={style.bar}></div>
                <div className={style.bar}></div>
            </div>
            <h2 style={{ marginTop: '20px', display: 'flex' }}>
                Bollywood <span style={{ color: 'red' }}>Style</span>
            </h2>
            <div>
                <ul className={`${style.Navecontant} ${showNav ? style.show : ''}`}>

                    <li style={{ cursor: 'pointer' }} onClick={onhome}>
                        Home
                    </li>
                    <li>
                        <Link className={style.datils} to={'Product'}>
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link className={style.datils} to={'About'}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className={style.datils} to={'Contact'}>
                            Contact
                        </Link>
                    </li>

                    <div className={style.Navecontain}>

                        <Link to="login">
                            <button className={style.button}>
                                <img src="login.png" alt="" /> Login
                            </button>
                        </Link>
                        <Link to="Ragister">
                            <button className={style.button}>
                                <img src="ragister.png" alt="" />Register
                            </button>
                        </Link>
                        <Link to="Cart">
                            <button className={style.button}>
                                {' '}
                                <img src="cart.png" alt="" />Cart ({selector.length})
                            </button>
                        </Link>
                    </div>

                </ul>
            </div>


        </div>
    );
};

export default NavaBar;
