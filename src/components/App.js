import React, { Component } from 'react';
import Navigation from './Navigation';
import Notes from './Notes';
import AddNote from './AddNote';
import Footer from './Footer';


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

  render() {
    return (
      <div>
        <Navigation />
        <Notes notes={this.state.notes} />
		    <AddNote addNote={this.addNote}/>
        <Footer />
      </div>
    );

  }
}

export default App;
