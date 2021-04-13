import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";
import './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {

    name?: string

}

export const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        name = "push",
        ...restProps
    }
) => {

    return (
        <button className={s.button}
                {...restProps}
        >{name} </button>
    );
}

