import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar';
import CodeForStyle from './Components/CodeForStyle';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import NotFound from './Components/NotFound';
import EditUser from './Components/EditUser';


function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path='/' component={CodeForStyle} />
                <Route exact path='/add' component={AddUser} />
                <Route exact path='/all' component={AllUsers} />
                <Route exact path='/edit/:id' component={EditUser} />
                <Route component={NotFound} />
            </Switch>    
        </Router>      
    );
}

export default App;