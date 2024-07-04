'use client';

import { useState } from 'react';
import style from './../header.module.css';

export default function ButtonMobile() {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu);
    };

    const handleLinkClick = () => {
        setMenu(false);
    };

    return (
        <>
            <button onClick={handleClick} className={style.button__menu}>
                <div className={menu ? style.nav__button__menu__close : style.nav__button__menu}></div>
            </button>
            <div className={menu ? style.container_modal_active : style.container_modal}>
                <div className={style.modal}>
                    <ul className={style.modal__ul}>
                            <li className={style.modal__li}><a href="#home" onClick={handleLinkClick}>Home</a></li>
                            <li className={style.modal__li}><a href="#about" onClick={handleLinkClick}>About</a></li>
                        <li className={style.modal__li}><a href="#formContact" onClick={handleLinkClick}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}