import React from 'react';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom'
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import "./App.css"
import {store, StoreType} from "./Redux/store";

type AppPropsType = {
    store: StoreType
}

export const App = (props: AppPropsType) => {
    const state = props.store.getState()
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<Dialogs dialogsPage={state.dialogsPage}
                                             dispatch={props.store.dispatch.bind(store)}

                           />}/>
                    <Route path='/profile'
                           element={<Profile
                               profilePage={state.profilePage}
                               messages={state.profilePage.newPost}
                               dispatch={props.store.dispatch.bind(store)}
                           />}/>
                </Routes>
            </div>
        </div>
    );
}

