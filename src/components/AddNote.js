import React, { Component } from "react";
import reactDom from "react-dom";
import { uuid } from "uuidv4";
import classNames from 'classnames';

class AddNote extends Component {
    state = {
        id: uuid(),
        title: '',
        description: '',
        errors: {},
        redirectToReferrer: false
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.title === '') {
            this.setState({
                errors: {
                    ...this.state.errors,
                    title: 'Please provide title'
                }
            });
            return;
        }

        if (this.state.description === '') {
            this.setState({
                errors: {
                    ...this.state.errors,
                    description: 'Please provide description',
                }
            });
            return;
        }

        this.props.addNote(this.state);

    
        this.setState({
            id: '',
            title: '',
            description: '',
            errors: {},
             redirectToReferrer: true
        });


    };

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className={ classNames('form-control', !!this.state.errors.title && 'is-invalid') } />
                        <div className="invalid-feedback">Title field is required</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Description</label>
                        <textarea name="description" value={this.state.description} onChange={this.handleChange} className={ classNames('form-control', !!this.state.errors.description && 'is-invalid') }></textarea>
                        <div className="invalid-feedback">Description field is required</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNote;