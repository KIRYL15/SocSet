import {dialogsPageType} from "./store";

export type GenerationType = newMessageBodyACType | sendMessageACType
let initialState: dialogsPageType = {
    dialogs: [
        {id: 1, name: 'Evgen'},
        {id: 2, name: 'Ivan'},
        {id: 3, name: 'Anna'},
        {id: 4, name: 'Olga'},
        {id: 5, name: 'Petr'},
    ],
    message: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your?'},
        {id: 3, message: 'Привет'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Salut'},
    ],
    newMessageBody: ''
}
export const DialogsReducer = (state: dialogsPageType = initialState, action: GenerationType) => {
    switch (action.type) {
        case 'NEW-MESSAGE-BODY': {
            state.newMessageBody = action.body
            return state
        }
        case 'SEND-MESSAGE': {
            const body = {id: 6, message: action.message}
            state.newMessageBody = " "
            state.message.push(body)
            return state
        }
        default:
            return state
    }
}
type newMessageBodyACType = ReturnType<typeof newMessageBodyAC>
export const newMessageBodyAC = (body: string) => {
    return {
        type: 'NEW-MESSAGE-BODY',
        body
    } as const
}

type sendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = (message: string) => {
    return {
        type: 'SEND-MESSAGE',
        message
    } as const
}

