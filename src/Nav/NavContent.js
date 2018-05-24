import React, { Component } from 'react';
import AboutMeContent from './NavInner/AboutMeContent';
import ExperienceContent from './NavInner/ExperienceContent';
import SkillsContent from './NavInner/SkillsContent';
import ContactDetailsContent from './NavInner/ContactDetailsContent';

class NavContent extends React.Component{
    constructor(props){
        super(props);
        this.handleClickAboutMe = this.handleClickAboutMe.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);
        this.handleClickExprience = this.handleClickExprience.bind(this);
        this.handleClickSkills = this.handleClickSkills.bind(this);
        this.state = {
            display: ''
        };
    }

    handleClickAboutMe(){
        this.setState({display:AboutMeContent});
    }

    handleClickSkills(){
        this.setState({display:SkillsContent});
    }

    handleClickExprience(){
        this.setState({display:ExperienceContent});
    }

    handleClickContact(){
        this.setState({display:ContactDetailsContent});
    }

    componentDidMount(){
        if (this.props.page === "AboutMe") {
            this.setState({display: AboutMeContent});
        }
        if (this.props.page === "Skills") {
            this.setState({display: SkillsContent});
        }
        if (this.props.page === "Projects") {
            this.setState({display: ExperienceContent});
        }
        if (this.props.page === "Contact") {
            this.setState({display: ContactDetailsContent});
        }
    }

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">Shivendran Tiruchanpalli</a>
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

                <div class="container" id="NavInner">
                    {this.state.display}
                </div>
            </div>
        );
    }
}

export default NavContent;