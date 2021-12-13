import React from 'react';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom'
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import "./App.css"
import {RootStateType} from "./Components/state";

type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/dialogs'}
                           element={<Dialogs dialogsData={props.state.dialogsData} postData={props.state.postData}/>}/>
                    <Route path={'/profile'}
                           element={<Profile postData={props.state.postData}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
