import {GenerationType} from "./gialogs-reducer";
import {DialogsReducer} from "./gialogs-reducer";
import {ProfileReducer} from "./profile-reducer";

export type StoreType = {
    _state: RootStateType
    _renderTree: () => void
    subscribe: (_renderTree: () => void) => void
    getState: () => RootStateType
    dispatch: (action: GenerationType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            newPost: '',
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _renderTree() {
        console.log('Hello')
    },
    subscribe(observer) {
        this._renderTree = observer//наблюдатель------паттерн-----
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        //this._state.sidebarPage = SidebarReducer(this._state.sidebarPage, action)
        this._renderTree()
    }
}

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: any
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
    newMessageBody: string
}









