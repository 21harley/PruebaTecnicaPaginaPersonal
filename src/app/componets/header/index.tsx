import ButtonMobile from "./buttonMobile";
import style from "./header.module.css";

export default function Header() {
    return (
        <header className={style.header}>
            <nav className={style.header__nav}>
                <div className={style.nav__div}>D</div>
                <ul className={style.nav__ul}>
                    <li className={style.ul__li}><a href="#home">Home</a></li>
                    <li className={style.ul__li}><a href="#about">About</a></li>
                    <li className={style.ul__li}><a href="#formContact">Contact</a></li>
                </ul>
                <ButtonMobile />
            </nav>
        </header>
    );
}