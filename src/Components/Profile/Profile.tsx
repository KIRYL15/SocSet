import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postDataType, PostType, RootStateType} from "../state";

type ProfilePropsType={
    postData: postDataType
}

export function Profile(props: ProfilePropsType) {
    return (<div>
            <ProfileInfo/>
            <MyPosts post={props.postData.post} />
        </div>
    )
}