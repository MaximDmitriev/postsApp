import React from 'react';
import { ListGroup } from 'reactstrap';

import "./post-list.css";

import PostListItem from "../post-list-item/post-list-item";

const PostList = ({posts, onDeleteRequest, onToggleImportant, onToggleLiked}) => {
    posts = posts.map((item) => {

        const {id, ...itemProps} = item
        return(
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDeleteRequest={() => onDeleteRequest(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                    />
            </li>
        )
    });

    return(
        <ListGroup className="app-list">
            {posts}
        </ListGroup>
    )
}

export default PostList;