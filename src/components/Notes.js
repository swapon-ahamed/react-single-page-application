import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';

/**
 * Function based component
 */
// const Notes = (props) => {
//     const {notes} = props;
//     return (
//         <div>
//             { notes.map(note => (
//                 <Note key={note.id} title={note.title} description={note.description}/>
//             ))
//             }
//         </div>
//     );
// };

class Notes extends Component {
    render() {
        const notes = this.props.notes;
        return (
            <div>
                <h3>Notes</h3>
                {notes.map(note => (
                    <Note key={note.id} title={note.title} description={note.description} />
                ))
                }
            </div>
        );
    }
}

export default Notes;