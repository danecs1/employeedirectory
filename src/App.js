import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Employees from './pages/Employee';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <Route exact path='/' component={About} />
          <Route exact path='/about' component={About} />
          <Route exact path='/employees' component={Employees} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
