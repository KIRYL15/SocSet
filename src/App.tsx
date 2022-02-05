import React from 'react';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom'
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import "./App.css"
import {StoreType} from "./Redux/state";

type PropsType = {
    store: StoreType
}
export const App = (props: PropsType) => {
    const state = props.store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<Dialogs dialogsPage={state.dialogsPage}/>}/>
                    <Route path='/profile'
                           element={<Profile profilePage={state.profilePage}
                                             dispatch={props.store.dispatch.bind(props.store)}
                                             messages={state.profilePage.newPost}
                           />}/>
                </Routes>
            </div>
        </div>
    );
}
