import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {GenerationType, profilePageType} from "../../Redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    messages: string
    dispatch:(action: GenerationType)=>void
}

export function Profile(props: ProfilePropsType) {
    //debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPosts post={props.profilePage.post}
                     messages={props.profilePage.newPost}
                     dispatch={props.dispatch}

            />
        </div>
    )
}