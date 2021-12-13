export type MessageDataType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    like: string
    message: string
}
export type postDataType = {
    post: PostType[]
}
export type dialogsDataType = {
    dialogs: DialogsType[]
    message: MessageDataType[]
}
export type RootStateType = {
    postData: postDataType
    dialogsData: dialogsDataType
}

export let state: RootStateType = {
    postData: {
        post: [
            {id: 1, message: 'Hi how are you?', like: '15'},
            {id: 2, message: 'It my first post', like: '23'},
            {id: 3, message: 'YO', like: '28'},
            {id: 4, message: 'Hi', like: '32'},
        ]
    },
    dialogsData: {
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
            {id: 3, message: 'Yo'},
        ]
    },

}
