import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialodsItem/DialogsItem";
import {Message} from "./Message/Message";
import {GenerationType, newMessageBodyAC, sendMessageAC} from "../../Redux/gialogs-reducer";
import {dialogsPageType} from "../../Redux/store";

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: GenerationType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = props.dialogsPage.message.map(m => <Message message={m.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody
    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC(props.dialogsPage.newMessageBody));

    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newMessageBodyAC(e.currentTarget.value))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <div className={s.textarea}>
                <textarea placeholder={"Enter your message"}
                          onChange={onNewMessageChange}
                          value={newMessageBody}/>
            </div>
            <div className={s.button}>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}
