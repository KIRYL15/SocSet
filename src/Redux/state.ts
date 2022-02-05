import {renderTree} from "../render";

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export let state: RootStateType = {
    profilePage: {
        newPost: 'Hello',
        post: [
            {id: 1, message: 'Hi how are you?', like: '15'},
            {id: 2, message: 'It my first post', like: '23'},
            {id: 3, message: 'YO', like: '28'},
            {id: 4, message: 'Hi', like: '32'},
        ],
    },
    dialogsPage: {
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
        ]
    },
}
window.state = state
export const addPost = (postText: string) => {
    //debugger
    const newPost: PostType = {
        id: 5,
        message: postText,
        like: '1',
    }
    state.profilePage.post.push(newPost)

    renderTree(state)
}

export const updateNewPostText = (newText: string) => {
    //debugger
    state.profilePage.newPost = newText
    renderTree(state)
}
export const changeNewText = (newText: string) => {
    state.profilePage.newPost=newText
    renderTree(state)
}


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
    message: string
    like: string
}
export type profilePageType = {
    newPost: string
    post: PostType[]
}
export type dialogsPageType = {
    dialogs: DialogsType[]
    message: MessageDataType[]
}



