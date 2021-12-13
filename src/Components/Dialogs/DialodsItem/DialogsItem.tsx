import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {dialogsDataType, postDataType, RootStateType} from "../../state";

type DialogItemPropsType = {
    name:string
    id: number
}


export let DialogItem = (props: DialogItemPropsType) => {
    return <div className={style.dialog + ' ' + style.active}>
        <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
    </div>
}