import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props){
    super()
    this.state = {
      title: "Nashville Goldsmith",
      headerLinks: [
       { title: "Home", path: '/'},
       { title: "About", path: '/about'},
       { title: "Contact", path: '/contact'},
       { title: "Gallery", path: '/gallery'}
      ],
      home: {
        title: 'Nashville\'s Premiere Jewelery',
        subTitle: 'Specializing in Custom Designs and Antique Jewelry',
      },
      about: {
        title: 'About the Owner'
      },
      contact: {
        title: 'Contact Me'
      },
      gallery: {
        title: 'Gallery'
      }
    }
  }
 

  render() {
  return (
    <div className="App">
      <h1>Hello Nashville!</h1>
    </div>
  )}

}

export default App;
