import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props){
    super()
    this.state = {
      title: "Nashville Goldsmith",
      headerLinks: [
       { title: "Home", path: '/' },
       { title: "About", path: '/about' },
       { title: "Contact", path: '/contact' },
       { title: "Gallery", path: '/gallery' }
      ],
      home: {
        title: 'Nashville\'s Premiere Jeweler',
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
   
      <Router>
      <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Nashville Goldsmith</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About the Owner</Link>
                <Link className="nav-link" to="/contact">Contact Me</Link>
                <Link className="nav-link" to="/Gallery">Gallery</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/gallery" render={() => <ContactPage title={this.state.gallery.title} />} />
          
          <Footer />

        </Container>

      </Router>
  
  )}

}

export default App;
