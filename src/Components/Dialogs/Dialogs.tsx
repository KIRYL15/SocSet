import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialodsItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsDataType, postDataType} from "../state";

type DialogsPropsType = {
    dialogsData:dialogsDataType
    postData: postDataType
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsData.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
    let messageElements = props.dialogsData.message.map(m => <Message message={m.message}/>)

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
