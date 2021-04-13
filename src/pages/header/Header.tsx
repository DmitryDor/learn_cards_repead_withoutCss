import React from "react";
import { NavLink } from "react-router-dom";
import style from './header.module.css'
import {SuperButton} from "../../components/superButton/SuperButton";

export const Header = () => {
    return (
        <div className={style.main}>
            <NavLink to={'/login'} activeClassName={style.active}>Login</NavLink>
            <NavLink to={'/registr'} activeClassName={style.active}>Registr</NavLink>
            <NavLink to={'/passwordRecovery'} activeClassName={style.active}>Password Recovery</NavLink>
            <NavLink to={'/setPassword'} activeClassName={style.active}>Set Password</NavLink>
            <NavLink to={'/profile'} activeClassName={style.active}>Profile</NavLink>
            <NavLink to={'/packs'} activeClassName={style.active}>Packs</NavLink>
            <NavLink to={'/cards'} activeClassName={style.active}>Cards</NavLink>
            <SuperButton name='LogOut' style={{width: '130px', height: '50px'}}/>
        </div>
    )
}