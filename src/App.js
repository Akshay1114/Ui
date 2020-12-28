import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import Ui from './components/Ui';
import MiddleSite from './components/MiddleSite';
import SecondPage from './components/SecondPage';
import  './components/Ui.css'

function App() {
  return (
    <div>
    <div className="App">
      <Router>
    <Switch>
      {/* <Login exact path ='/' component={Login} />
      <Route path ='/register' component={Register} /> */}
    </Switch>
    </Router>
    <Ui />
    <MiddleSite />
    </div >
    <SecondPage  />
    </div>

  );
}

export default App;
