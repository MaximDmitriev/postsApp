import React, {Component} from 'react';

import "./post-list-item.css";

export default class PostListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            label: this.props.label,
            important: this.props.important,
            like: false,
            showForm: false
        }

        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onToggleClass = this.onToggleClass.bind(this);
        this.onPostChange = this.onPostChange.bind(this);

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

    onToggleClass() {
        this.setState(({showForm}) => ({
            showForm: !showForm
        }));
        setTimeout(() => {
            let forms = document.querySelector(".visible"),
                inputForm = forms.querySelector("input");

            inputForm.value = this.state.label;
        },1);  
    }

    onPostChange() {
        this.setState(({showForm}) => ({
            showForm: !showForm
        }))
        let forms = document.querySelector(".visible"),
            inputForm = forms.querySelector("input");

        this.setState(() => ({
            label: inputForm.value
        }))
    }

    render() {
        const {onDeleteRequest} = this.props;
        const {important, like, showForm, label} = this.state;

        let classNames = "app-list-item d-flex justify-content-between";
        let classNameForm = "changePost";
        if (important) {
            classNames += " important";
        }

        if (like) {
            classNames += " like";
        }

        if (showForm) {
            classNameForm += " visible";
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
                        className="btn-trash btn-sm"
                        onClick={onDeleteRequest}>
                            <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                    <button 
                        className="btn btn-outline-secondary"
                        onClick={this.onToggleClass}>Изменить</button>
                </div>

                <form className={classNameForm}>
                    <div className="form-group">
                        <label htmlFor="changePost">Внесите изменения</label>
                        <input type="text" className="form-control" id="changePost"/>
                    </div>
                    <button 
                        type="button" 
                        className="btn btn-info"
                        onClick={this.onPostChange}>Изменить</button>
                </form>
            </div>
        )
    }
}