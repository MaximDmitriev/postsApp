import React from 'react';

import "./post-list.css";

import PostListItem from "../post-list-item/post-list-item";

const PostList = ({posts, onDelete}) => {

    // let elements = posts.filter((item) => (typeof(item) == "object" && item.id !== undefined && item.label !== undefined));

    posts = posts.map((item) => {

        const {id, ...itemProps} = item
        return(
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    />
            </li>
        )
    });

    return(
        <ul className="app-list list-group">
            {posts}
        </ul>
    )
}

export default PostList;