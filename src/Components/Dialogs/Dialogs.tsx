import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialodsItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsDataType} from "../../Redux/state";

type DialogsPropsType = {
    dialogsPage: dialogsDataType
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id}
                                                                         name={d.name}/>)
    let messageElements = props.dialogsPage.message.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
