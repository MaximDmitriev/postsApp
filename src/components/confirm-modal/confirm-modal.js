import React, {Component} from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const ConfirmModalWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%);
    z-index: 10;
    width: 400px;
    height: 150px;
    border: 1px solid #ced4da;
    border-radius: 3px;
    background-color: #fff;
    visibility: ${props => props.showIt? "visible" : "hidden"};
    h2{
        text-align: center;
        font-size: 18px;
        margin-top: 20px;
        width: 100%
    }
    button{
        width: 82px;
        margin-top: 30px;
    }
`
export default class ConfirmModal extends Component {
    
    render(){
        const {onCloseModal} = this.props;
        const {onDelete} = this.props;

        return(
            <ConfirmModalWrapper 
                showIt={this.props.show}>
                <h2>Удалить пост</h2>
                <Button 
                    outline color="secondary"
                    onClick={onDelete}>OK</Button>
                <Button 
                    color="secondary"
                    onClick={onCloseModal}>Отмена</Button>
            </ConfirmModalWrapper>
        )
    }
}