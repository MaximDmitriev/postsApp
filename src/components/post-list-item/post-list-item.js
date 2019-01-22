import React, {Component} from 'react';

import "./post-list-item.css";


export default class PostListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            important: false,
            like: false
        }

        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);

        const date = new Date();

        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();

    } 

    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {label} = this.props;
        const {important, like} =this.state;

        let classNames = "app-list-item d-flex justify-content-between";

        if (important) {
            classNames += " important";
        }

        if (like) {
            classNames += " like";
        }
    
        return(
            <div className={classNames}>
                <span 
                    className="app-list-item-label"
                    onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="data-label d-flex justify-content-center align-items-center">
                        <span className="data-label-item" id="day">{this.day < 10 ? "0" + this.day : this.day}</span>
                        <span className="data-label-item" id="month">{this.month < 10 ? "0" + this.month : this.month}</span>
                        <span className="data-label-item" id="year">{this.year}</span>
                    </div>
                    <button 
                        type="button" 
                        className="btn-star btn-sm"
                        onClick={this.onImportant}>
                            <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-sm">
                            <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}