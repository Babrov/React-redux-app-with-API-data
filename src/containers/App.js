import React from "react";
import "../styles/App.scss";
import Navigation from "../components/Navigation";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PostsPageContainer from "../containers/PostsPageContainer";
import UserDetailsPage from "../containers/UserDetailsPage";
import UsersPageContainer from "./UsersPageContainer";
import ToDoPageContainer from "./ToDoPageContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <Switch>
                    <Redirect exact from="/" to="/posts" />
                    <Route exact path="/posts">
                        <PostsPageContainer />
                    </Route>
                    <Route path="/users" exact>
                        <UsersPageContainer />
                    </Route>
                    <Route path="/users/:id" component={UserDetailsPage} />
                    <Route path="/todo">
                        <ToDoPageContainer />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
