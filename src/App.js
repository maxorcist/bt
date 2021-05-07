import './App.css';
import UsersPage from "./components/UsersPage/UsersPage";
import UserPage from "./components/UserPage/UserPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import AlbumPage from "./components/AlbumPage/AlbumPage";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import {useState} from "react";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/users">
                    <UsersPage />
                </Route>
                <Route path="/users/:id/:albumId">
                    <AlbumPage />
                </Route>
                <Route path="/users/:id">
                    <UserPage />
                </Route>
                <Route path="/">
                    <Redirect to="/users" />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
