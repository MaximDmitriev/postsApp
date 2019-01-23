import React from 'react';
import { Button, Input } from 'reactstrap';

import "./post-add-form.css";

const PostAddForm = ({onAdd}) => {
    return(
        <div className="d-flex bottom-panel">
            <Input
                type="text"
                placeholder="О чем вы думаете сейчас"
                className="new-post-label"
            />
            <Button 
                type="submit"
                outline
                color="secondary"
                onClick={() => onAdd("Hello")}>
                Добавить
            </Button>

        </div>
    )
}

export default PostAddForm;