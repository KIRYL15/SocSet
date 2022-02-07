import {PostType, profilePageType} from "./store";

export type GenerationType = addPostACType | onChangeHandlerACType
const initialState: profilePageType = {
    newPost: '',
    post: [
        {id: 1, message: 'Hi how are you?', like: '15'},
        {id: 2, message: 'It my first post', like: '23'},
        {id: 3, message: 'YO', like: '28'},
        {id: 4, message: 'Hi', like: '32'},
    ],
}
export const ProfileReducer = (state: profilePageType = initialState, action: GenerationType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {id: 5, message: action.postText, like: '1'}
            state.post.push(newPost)
            state.newPost = ''
            return state
        }
        case 'CHANGE-NEW-TEXT-POST': {
            state.newPost = action.newText
            return state
        }
        default:
            return state
    }
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
        newText
    } as const
}