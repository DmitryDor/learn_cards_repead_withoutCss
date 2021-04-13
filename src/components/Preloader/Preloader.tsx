import React from 'react';
import style from './Preloader.module.css'

import {CircularProgress} from "@material-ui/core";


export const  Preloader = () => {
    return <div  className={style.pre}>
        <CircularProgress />
    </div>
}

