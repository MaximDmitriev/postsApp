import React, {Component} from 'react';
import idGenerator from "react-id-generator";
import styled from 'styled-components';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

const AppWrapper = styled.div`
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
            data: elements
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex( item => item.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newData = [...before, ...after];

            return {
                data: newData
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: idGenerator()
        }

        this.setState(({data}) => {
            const newData = [...data, newItem];

            return {
                data: newData
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
                    onDelete={this.deleteItem}
                    />
                <PostAddForm 
                    onAdd={this.addItem}/>
            </AppWrapper>
        )
    }


}