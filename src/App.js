import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home'
import About from './components/About/About';
import Courses from './components/Courses/Courses'
import Error from './components/Error/Error';
import Litigation from './components/Litigation/Litigation';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>


          <Route exact path="/home">

            <Home></Home>
          </Route>


          <Route exact path="/about">

            <About></About>
          </Route>

          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/litigation">
            <Litigation></Litigation>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
