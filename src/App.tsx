import React from 'react';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom'
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import "./App.css"
import {addPost, changeNewText, state, updateNewPostText} from "./Redux/state";


export function App() {
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
                                             addPostCallback={addPost}
                                             messages={state.profilePage.newPost}
                                             changeNewTextCallback={changeNewText}


                           />}/>
                </Routes>
            </div>
        </div>
    );
}
