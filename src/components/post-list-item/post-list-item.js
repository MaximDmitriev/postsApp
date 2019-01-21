import React from 'react';

import "./post-list-item.css";

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const PostListItem =  () => {
    return(
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello!
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <div className="data-label d-flex justify-content-center align-items-center">
                    <span className="data-label-item" id="day">{day < 10 ? "0" + day : day}</span>
                    <span className="data-label-item" id="day">{month < 10 ? "0" + month : month}</span>
                    <span className="data-label-item" id="day">{year}</span>
                </div>
                <button 
                    type="button" 
                    className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                </button>
                <button 
                    type="button" 
                    className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;