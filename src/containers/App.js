import React from "react";
import "../styles/App.scss";
import Navigation from "../components/Navigation";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import UsersPage from "../components/UsersPage";
import ToDoPage from "../components/ToDoPage";
import PostsPageContainer from "../containers/PostsPageContainer";
import UserDetailsPage from "../containers/UserDetailsPage";

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
                        <UsersPage />
                    </Route>
                    <Route path="/users/:id" component={UserDetailsPage} />
                    <Route path="/todo">
                        <ToDoPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
