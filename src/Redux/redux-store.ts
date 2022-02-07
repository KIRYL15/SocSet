import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {DialogsReducer} from "./gialogs-reducer";

const rootReducer = combineReducers({

    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
})
export const store = createStore(rootReducer)

// @ts-ignore
window.store = store