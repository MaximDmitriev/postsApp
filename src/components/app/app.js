import React, {Component} from 'react';
import styled from 'styled-components';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import ConfirmModal from "../confirm-modal/confirm-modal"

const AppWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 800px;
`
export default class App extends Component  {

    constructor(props) {
        super(props)

        const data = [
            1,
            {label: "This is post's text", important: true, id: 1},
            {label: "Another post", important: false, id: 2},
            {label: "One more post", important: false, id: 3},
            {length: 4, value: true},
            {id: 4}
        ]
        const elements = data.filter((item) => (typeof(item) == "object" && item.id !== undefined && item.label !== undefined));
        
        this.state = {
            data: elements,
            modal: false,
            deleteId: 0
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.deleteItemRequest = this.deleteItemRequest.bind(this);
        this.addItem = this.addItem.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    deleteItemRequest(id) {
        this.setState(() => {
            return {
                modal: true,
                deleteId: id
            }
        });
    }

    deleteItem() {
            const id = this.state.deleteId;
            this.setState(({data}) => {
            const index = data.findIndex( item => item.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newData = [...before, ...after];

            return {
                data: newData,
                modal: false,
             }
        });
    }

    addItem(body) {

        let idArr = [];
        this.state.data.forEach(item => idArr.push(item.id));
        let newId;

        do {
            newId = (Math.random()*1000).toFixed();
        }
        while (idArr.includes(newId));

        const newItem = {
            label: body,
            important: false,
            id: newId
        }

        this.setState(({data}) => {
            const newData = [...data, newItem];

            return {
                data: newData
            }
        });
    }

    closeModal(){
        this.setState(() => {
            return {
                modal: false
            }
        });
    }

    render() {
        return (
            <AppWrapper>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList 
                    posts = {this.state.data}
                    onDeleteRequest={this.deleteItemRequest}
                    />
                <PostAddForm 
                    onAdd={this.addItem}/>
                <ConfirmModal
                    show={this.state.modal}
                    onCloseModal={this.closeModal}
                    onDelete={this.deleteItem}
                    />
            </AppWrapper>
        )
    }
}