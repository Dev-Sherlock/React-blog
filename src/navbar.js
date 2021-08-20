import React from 'react';
import Contact from './contact';
import About from './about';
import Posts from './posts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function NavBar(props) {
    return (
           <Router>

        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
                         <Nav.Link href="#action1"><Link to="/">Posts</Link></Nav.Link>

                         <Nav.Link href="#action1"><Link to="/about">About</Link></Nav.Link>
                     
                         <Nav.Link href="#action1"> <Link to="/contact">Contact</Link></Nav.Link>

    </Nav>

    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
   

                 <Switch>
                     <Route path="/about">
                         <About />
                     </Route>
                     <Route path="/contact">
                         <Contact />
                     </Route>
                     <Route path="/">
                         <Posts />
                     </Route>
                 </Switch>
         </Router>
    )
}

export default NavBar;