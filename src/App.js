 import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Views/Home'
import About from './Views/About'
import Products from './Views/Products'

function App() {
  return (
    <div>
        <Router>
          <Header />

          <div className="p-3">
            <Switch>
              <Route exact path="/">
              <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
            </Switch>
          </div>

          <Footer />

        </Router>
      
    </div>
  );
}

export default App;
