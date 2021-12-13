import React from 'react';
import s from './Post.module.css'
//import Post from './Post/Post'
import IconMan from './IconMan.png'

type PostPropsType={
    message: string
    like: string
}
export function Post (props: PostPropsType) {
    return <div className={s.items}>
        <img src={IconMan}/> {props.message}
        <div>
            <span>Like:</span> {props.like}
        </div>
    </div>
}
