import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './pages/About/About';
import Landing from './pages/Landing/Landing';
import {Link,Redirect,Route, Switch} from 'react-router-dom';


function App() {
    return (
        <div className="App" >
            <Navbar/>
            <div className="main-section">
            <Switch>
                <Route path="/about" exact><About /></Route>
                <Route path="/home" exact><Home /></Route>
                <Route path="/landing" exact><Landing /></Route>
                <Redirect to="/landing" path="/"></Redirect>                
            </Switch>
            </div>

        </div>
    );
}

export default App;