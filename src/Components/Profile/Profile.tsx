import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, changeNewText, profilePageType, updateNewPostText} from "../../Redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    addPostCallback: (postText: string) => void
    messages: string
    changeNewTextCallback: (newText: string) => void
}

export function Profile(props: ProfilePropsType) {
    //debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPosts post={props.profilePage.post}
                     addPostCallback={addPost}
                     messages={props.profilePage.newPost}
                     changeNewTextCallback={changeNewText}

            />
        </div>
    )
}