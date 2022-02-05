import React from 'react';
import style from './Header.module.css'
import peace from './peace.jpg'

export function Header() {
    return (
        <header className={style.header}>
            <img src={peace} alt={"logotype"}/>
        </header>
    )
}