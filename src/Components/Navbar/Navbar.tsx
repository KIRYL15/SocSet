import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navbar.module.css"

const setActive = ({isActive}: { isActive: boolean }) => isActive ? style.active : ""

export function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.items}>
                <NavLink to='/profile' className={setActive}> Profile</NavLink>
            </div>
            <div className={style.items}>
                <NavLink to='/dialogs' className={setActive}> Messages </NavLink>
            </div>
            <div className={style.items}>
                <NavLink to='/news' className={setActive}>News</NavLink>
            </div>
            <div className={style.items}>
                <NavLink to='/music' className={setActive}>Music</NavLink>
            </div>
            <div className={style.items}>
                <NavLink to='/setting' className={setActive}>Settings</NavLink>
            </div>
        </nav>
    )
}