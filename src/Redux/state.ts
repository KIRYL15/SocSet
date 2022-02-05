export type StoreType = {
    _state: RootStateType
    _renderTree: () => void
    subscribe: (_renderTree: () => void) => void
    getState: () => RootStateType
    dispatch: (action: GenerationType) => void
}
export type GenerationType = addPostACType | onChangeHandlerACType

export const store: StoreType = {
    _state: {
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
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: action.postText,
                like: '1',
            }
            this._state.profilePage.post.push(newPost)
            this._state.profilePage.newPost = ''
            this._renderTree()
        } else if (action.type === 'CHANGE-NEW-TEXT-POST') {
            this._state.profilePage.newPost = action.newText
            this._renderTree()
        }
    },
}

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
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

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
type onChangeHandlerACType = ReturnType<typeof onChangeHandlerAC>
export const onChangeHandlerAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT-POST',
        newText: newText
    } as const
}






