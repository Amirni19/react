import { Btn } from '../Btn/Btn'
import s from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'

export function Header(){
    return(
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <p className={s.logo}>LOGO</p>
                    <nav className={s.nav}>
                        <NavLink to="/">Главная</NavLink>
                        <NavLink to="/catalog">Каталог</NavLink>
                    </nav>
                    <Btn/>
                </div>
            </div>
        </header>
    )
}