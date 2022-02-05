import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostAC, GenerationType, onChangeHandlerAC, PostType} from "../../../Redux/state";

type postDataType = {
    post: PostType[]
    messages: string
    dispatch: (action: GenerationType) => void
}

export const MyPosts = (props: postDataType) => {
    let postsElements = props.post.map(m => <Post message={m.message} like={m.like}/>)

    let addPost = () => {
        //props.dispatch({type:'ADD-POST', postText: props.messages})
        props.dispatch(addPostAC(props.messages))
    }

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.dispatch({type: "CHANGE-NEW-TEXT-POST", newText: e.currentTarget.value})
        props.dispatch(onChangeHandlerAC(e.currentTarget.value))
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
