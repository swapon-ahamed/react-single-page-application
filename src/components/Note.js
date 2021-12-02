import React from 'react';
import ReactDOM from 'react-dom';

const Note = (props) => {
    const {title, description} = props;
    return (
        <div className="card p-2 mb-2">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                </div>
        </div>
    );
};

export default Note;