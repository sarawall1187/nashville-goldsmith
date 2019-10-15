import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

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
        title: 'Nashville Goldsmith',
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
      <div className="main">
      <Router >
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" variant="dark" expand="lg">
            <Navbar.Brand className="text-muted">Matthew Walker, Owner  <a className="yellow" href="tel:615-426-1733">615-426-1733</a></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-toggle" /> 
                    <Navbar.Collapse className="yellow" id="navbar-toggle">
                      <Nav className="ml-auto main">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About the Owner</Link>
                        <Link className="nav-link" to="/contact">Contact Me</Link>
                        <Link className="nav-link" to="/gallery">Gallery</Link>
                      </Nav>
                    </Navbar.Collapse> 
                  </Navbar>

                <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
                <Route path="/about" render={() => <About title={this.state.about.title} />} />
                <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
                <Route path="/gallery" render={() => <Gallery title={this.state.gallery.title} />} />
                
          <Footer /> 

        </Container>

      </Router>
      </div>
    )
  }

}

export default App;
