import React from 'react';
import SkillsContent from "./Nav/NavInner/SkillsContent";
import AboutMeContent from "./Nav/NavInner/AboutMeContent";
import ExperienceContent from "./Nav/NavInner/ExperienceContent";
import ContactDetailsContent from "./Nav/NavInner/ContactDetailsContent";

class NavPage extends React.Component{
    constructor(props){
        super(props);
        this.handleClickAboutMe = this.handleClickAboutMe.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);
        this.handleClickExprience = this.handleClickExprience.bind(this);
        this.handleClickSkills = this.handleClickSkills.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.state = {
            displaybody: ''
        }
    }

    handleClickAboutMe(){
        this.setState({displaybody: [
                <div id="NavInner">
                    {AboutMeContent}
                </div>
            ]});
    }

    handleClickSkills(){
        this.setState({displaybody: [
                <div id="NavInner">
                    {SkillsContent}
                </div>
            ]});
    }

    handleClickExprience(){
        this.setState({displaybody: [
                <div id="NavInner">
                    {ExperienceContent}
                </div>
            ]});
    }

    handleClickContact(){
        this.setState({displaybody: [
                <div id="NavInner">
                    {ContactDetailsContent}
                </div>
            ]});
    }

    componentDidMount(){
        if (this.props.display === "aboutme"){
            this.handleClickAboutMe();
        }
        if (this.props.display === "skills"){
            this.handleClickSkills();
        }
        if (this.props.display === "experience"){
            this.handleClickExprience();
        }
        if (this.props.display === "contact"){
            this.handleClickContact();
        }
    }

    componentDidUpdate(){
        window.scroll(0,0);
    }

    render(){
        return(
            <div>
                <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" id="Nav-link" href={process.env.PUBLIC_URL}>Shivendran Tiruchanpalli</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                            <li class="nav-item">
                                <a id="Nav-link" class="nav-link" onClick={this.handleClickAboutMe} href="#AboutMe">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a id="Nav-link" class="nav-link" onClick={this.handleClickSkills} href="#Skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a id="Nav-link" class="nav-link" onClick={this.handleClickExprience} href="#Projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a id="Nav-link" class="nav-link" onClick={this.handleClickContact} href="#Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container">
                    {this.state.displaybody}
                </div>
            </div>
        );
    }
}

export default NavPage;