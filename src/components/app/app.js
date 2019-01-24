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
            {label: "This is post's text", important: true, like: false, id: 1},
            {label: "Another post", important: false, like: false, id: 2},
            {label: "One more post", important: false, like: false, id: 3},
            {length: 4, value: true},
            {id: 4}
        ]
        const elements = data.filter((item) => (typeof(item) == "object" && item.id !== undefined && item.label !== undefined));
        
        this.state = {
            data: elements,
            modal: false,
            deleteId: 0,
            term: "",
            filter: "all"
        }

        this.deleteItemRequest = this.deleteItemRequest.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSeach = this.onUpdateSeach.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
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

    closeModal() {
        this.setState(() => {
            return {
                modal: false
            }
        });
    }

    onToggleImportant(id) {

        this.setState(({data}) => {

            const index = data.findIndex( item => item.id === id);
            const newPost = data[index];
            newPost.important = !newPost.important;
            const newData = [...data.slice(0, index), newPost, ...data.slice(index + 1)]
            return{
                data: newData
            }
        });
    }

    onToggleLiked(id) {

        this.setState(({data}) => {

            const index = data.findIndex( item => item.id === id);
            const newPost = data[index];
            newPost.like = !newPost.like;
            const newData = [...data.slice(0, index), newPost, ...data.slice(index + 1)]
            return{
                data: newData
            }
        });
    }

    searchPost(items, term) {
        if (term === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateSeach(term) {
        this.setState({term})
    }

    filterPost(items, filter) {
        if (filter === "like") {
            return items.filter((item) => item.like)
        } else {
            return items
        }
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {

        const {data, term, filter} = this.state;

        const liked = data.filter(post => post.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
        
        return (
            <AppWrapper>
                <AppHeader 
                    liked={liked}
                    allPosts={allPosts}
                    />
                <div className="search-panel d-flex">
                    <SearchPanel 
                        onUpdateSeach={this.onUpdateSeach}
                    />
                    <PostStatusFilter
                        filter={filter} 
                        onFilterSelect={this.onFilterSelect}
                        />
                </div>
                <PostList 
                    posts = {visiblePosts}
                    onDeleteRequest={this.deleteItemRequest}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
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