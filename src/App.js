import logo from './logo.svg';
import './App.css';
import PostForm from './Components/PostForm';
import Get from './Components/Get';
import Delete from './Components/Delete';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div>
       <Link to ="/add"> <button> ADD USER</button> </Link>
        </div>
     <Switch> 
       <Route exact path="/">
     <Get/>
     </Route>

<Route  path="/add">
 <PostForm/>
   </Route>

   <Route exact path ="/update/:id">
<Delete/>
   </Route>
   </Switch>
    </div>
    </Router>
  );
}

export default App;
