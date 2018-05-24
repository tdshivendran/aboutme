import React, { Component } from 'react';
import TitleSubtitle from './Title/TitleSubtitle';
import SkillsContent from "./Nav/NavInner/SkillsContent";
import AboutMeContent from "./Nav/NavInner/AboutMeContent";
import ExperienceContent from "./Nav/NavInner/ExperienceContent";
import ContactDetailsContent from "./Nav/NavInner/ContactDetailsContent";

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.handleClickAboutMe = this.handleClickAboutMe.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);
        this.handleClickExprience = this.handleClickExprience.bind(this);
        this.handleClickSkills = this.handleClickSkills.bind(this);
        this.handleClickHome = this.handleClickHome.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            displayhead: '',
            displaybody: '',
            display: [
                <div id="MainPage">
                    <TitleSubtitle/>
                    <div class="Nav">
                        <ul class="Nav-list">
                            <li class="Nav-item">
                                <a href="#AboutMe" onClick={this.handleClickAboutMe}>Who am I?</a>
                            </li>
                            <li class="Nav-item">
                                <a href="#Skills" onClick={this.handleClickSkills}>What am I good at?</a>

                            </li>
                            <li class="Nav-item">
                                <a href="#Projects" onClick={this.handleClickExprience}>What have I worked on?</a>

                            </li>
                            <li class="Nav-item">
                                <a href="#Contact" onClick={this.handleClickContact}>How can I be contacted?</a>
                            </li>
                        </ul>
                    </div>
                </div>
            ],
            displaynav: [
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" onClick={this.handleClickHome} href="#Home">Shivendran Tiruchanpalli</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                                <li class="nav-item">
                                    <a class="nav-link" onClick={this.handleClickAboutMe} href="#AboutMe">About Me</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" onClick={this.handleClickSkills} href="#Skills">Skills</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" onClick={this.handleClickExprience} href="#Projects">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" onClick={this.handleClickContact} href="#Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            ]

        };
    }

    handleClickHome(){
        this.setState({displayhead: ''});
        this.setState({displaybody: this.state.display});
    }

    handleClickAboutMe(){
        this.setState({displayhead: this.state.displaynav});
        this.setState({displaybody: [
                <div id="NavInner">
                    {AboutMeContent}
                </div>
            ]});
    }

    handleClickSkills(){
        this.setState({displayhead: this.state.displaynav});
        this.setState({displaybody: [
                <div id="NavInner">
                    {SkillsContent}
                </div>
            ]});
    }

    handleClickExprience(){
        this.setState({displayhead: this.state.displaynav});
        this.setState({displaybody: [
                <div id="NavInner">
                    {ExperienceContent}
                </div>
            ]});
    }

    handleClickContact(){
        this.setState({displayhead: this.state.displaynav});
        this.setState({displaybody: [
            <div id="NavInner">
                {ContactDetailsContent}
            </div>
            ]});
    }

    componentDidMount(){
        this.setState({displaybody:this.state.display});
    }

    render(){
        return(
            <div>
                {this.state.displayhead}
                <div class="container">
                    {this.state.displaybody}
                </div>
            </div>
        );
    }
}


export default MainPage;
