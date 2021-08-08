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



function NavBar(props) {
    return (
        <Router>
            <div>

                <nav>
                    <ul>
                        <li>
                        <Link to="/">Posts</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>


                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
            </div>
        </Router>
    )
}

export default NavBar;