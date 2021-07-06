import Home from './components/Home';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import SearchPage from './components/SearchPage'
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route path='/search'><SearchPage/></Route>
      </Switch>
      <Switch>
        <Route exact={true} path='/'><Home/></Route>
      </Switch>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;


// Headers
// Banners->Search
//Bunch of card
//Footer
