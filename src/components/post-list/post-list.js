import React from 'react';

import "./post-list.css";

import PostListItem from "../post-list-item/post-list-item";

const PostList = ({posts}) => {

    let elements = posts.filter((item) => (typeof(item) == "object" && item.id !== undefined));

    elements = elements.map((item) => {

        const {id, ...itemProps} = item
        return(
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps}/>
            </li>
        )
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;