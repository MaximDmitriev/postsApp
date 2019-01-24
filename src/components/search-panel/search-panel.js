import React, {Component} from 'react';
import { Input } from 'reactstrap';

import "./search-panel.css";

export default class SearchPanel extends Component {

    constructor(props){
        super(props);
        this.state = {
            term: ""
        }

        this.onUpdateSeach = this.onUpdateSeach.bind(this);
    }

    onUpdateSeach(event) {
        const term = event.target.value.toLowerCase();
        this.setState({term});
        this.props.onUpdateSeach(term);
    }

    render() {
        return (
            <Input
                className="search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSeach}
             />
        )
    }
}
