import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../state";

type postDataType = {
    post: PostType[]
}

export const MyPosts = (props: postDataType) => {

    let postsElements = props.post.map(m => <Post message={m.message} like={m.like}/>)

    let newPostElement=React.useRef()

    let onButtonClick = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <div>
                    <button onClick={onButtonClick}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}
