import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/state";

type postDataType = {
    post: PostType[]
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (newText: string) => void
    messages: string

}

export const MyPosts = (props: postDataType) => {
    let postsElements = props.post.map(m =>  <Post message={m.message} like={m.like}/>)
    let addPost = () => {
        props.addPostCallback(props.messages)
    }

    let onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>

            <h2>My posts</h2>
            <div>
                <div>
                    <textarea value={props.messages}
                              onChange={onChangeHandler}>
                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}
