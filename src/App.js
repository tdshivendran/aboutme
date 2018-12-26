import React, { Component } from 'react';
import MainPage from './Pages/MainPage';
import { Switch, Route, HashRouter } from 'react-router-dom';
import AboutMePage from "./Pages/AboutMePage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/AboutMe' component={AboutMePage}/>
                    <Route exact path='/Skills' component={SkillsPage}/>
                    <Route exact path='/Projects' component={ProjectsPage}/>
                    <Route exact path='/Contact' component={ContactPage}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
