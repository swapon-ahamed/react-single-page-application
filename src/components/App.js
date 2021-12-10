import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Notes from './Notes';
import AddNote from './AddNote';
import Footer from './Footer';
import About from './About';
import NotFound from './NotFound';





// function App() {
//   return (
//     <div>
//       <Navigation />

//       <Notes />
//       <Footer />
//     </div>
//   );
// }

class App extends Component {
 
  state = {
    notes: [
      {
        id: 1,
        title: 'Notes 1',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque nam labore sint ipsam ipsum dignissimos ea eius consectetur facere?'
      },
      {
        id: 2,
        title: 'Notes 2',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque nam labore sint ipsam ipsum dignissimos ea eius consectetur facere?'
      },
      {
        id: 3,
        title: 'Notes 3',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed itaque nam labore sint ipsam ipsum dignissimos ea eius consectetur facere?'
      }
    ]
  }


addNote = note => {
  this.setState({
    notes: [...this.state.notes, note]
  })
};

// removeNote = id => {
//   this.setState({
//     notes: this.state.notes.filter(note.id !==id)
//   });
// };

  render() {
    return (
    
      <div>
        <Navigation />
       <Routes>
         <Route path="/" element={<Notes notes={this.state.notes} />} />
         <Route path="/add-note" element={<AddNote addNote={this.addNote}  />} />
         <Route path="/about" element={<About/>} />
         <Route path="*" element={<NotFound/>} />
         
       </Routes>
        <Footer />
      </div>
    );

  }
}

export default App;
