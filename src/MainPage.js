import React, { Component } from 'react';
import TitleSubtitle from './Title/TitleSubtitle';
import NavContent from './Nav/NavContent';

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.handleClickAboutMe = this.handleClickAboutMe.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);
        this.handleClickExprience = this.handleClickExprience.bind(this);
        this.handleClickSkills = this.handleClickSkills.bind(this);
        this.state = {
            display: [
                <div class="container" id="MainPage">
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
            ]
        };
    }

    handleClickAboutMe(){
        this.setState({display:<NavContent page="AboutMe"/>});
    }

    handleClickSkills(){
        this.setState({display:<NavContent page="Skills"/>});
    }

    handleClickExprience(){
        this.setState({display:<NavContent page="Projects"/>});
    }

    handleClickContact(){
        this.setState({display:<NavContent page="Contact"/>});
    }

    render(){
        return(
            <div>
                {this.state.display}
            </div>
        );
    }
}


export default MainPage;
