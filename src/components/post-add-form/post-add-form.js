import React, {Component} from 'react';
import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

const AddForm = styled.form`
    display: flex;
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
    margin-top: 20px;
    input{
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`
export default class PostAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
        
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
    }

    onValueChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ""
        })
    }

    render() {
        return(
            <AddForm onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    placeholder="О чем вы думаете сейчас"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button 
                    type="submit"
                    outline
                    color="secondary"
                    >
                    Добавить
                </Button>
            </AddForm>  
        )
    }
}

