import React from 'react';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form"

import "./app.css";

const App = () => {

    let data = [
        1,
        {label: "This is post's text", important: true, id: "qwer"},
        {label: "Another post", important: false, id: "sdfsdf"},
        {label: "One more post", important: false, id: "xcvxv"},
        {length: 4, value: true}
    ]

    data = data.filter((item) => (typeof(item) == "object" && item.id !== undefined));

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts = {data}/>
            <PostAddForm />
        </div>
    )
}

export default App;