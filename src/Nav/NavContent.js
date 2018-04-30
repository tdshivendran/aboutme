import React, { Component } from 'react';
import AboutMeContent from './NavInner/AboutMeContent';
import ExperienceContent from './NavInner/ExperienceContent';
import SkillsContent from './NavInner/SkillsContent';
import ContactDetailsContent from './NavInner/ContactDetailsContent';

class NavContent extends React.Component{
    constructor(props) {
        super(props);
        this.handleClickAboutMe = this.handleClickAboutMe.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);
        this.handleClickExprience = this.handleClickExprience.bind(this);
        this.handleClickSkills = this.handleClickSkills.bind(this);
        this.clearStateContent = this.clearStateContent.bind(this);
        this.state = {
            displayAboutMe: '',
            displayContactDetails: '',
            displayExperience: '',
            displaySkills: ''
        };
    }

    clearStateContent(){
        this.setState({
            displayAboutMe: '',
            displayContactDetails: '',
            displayExperience: '',
            displaySkills: ''
        });
    }

    handleClickAboutMe(){
        this.clearStateContent();
        if (this.state.displayAboutMe === ''){
            this.setState({ displayAboutMe: AboutMeContent});
        }
        else {
            this.setState({ displayAboutMe: ''});
        }
    }

    handleClickSkills(){
        this.clearStateContent();
        if(this.state.displaySkills === ''){
            this.setState({displaySkills: SkillsContent});
        }
        else {
            this.setState({displaySkills: ''});
        }
    }

    handleClickExprience(){
        this.clearStateContent();
        if(this.state.displayExperience === ''){
            this.setState({ displayExperience: ExperienceContent});
        }
        else{
            this.setState({ displayExperience: ''});
        }
    }

    handleClickContact(){
        this.clearStateContent();
        if (this.state.displayContactDetails === ''){
            this.setState({displayContactDetails: ContactDetailsContent})
        }
        else {
            this.setState({displayContactDetails: ''})
        }
    }

    render(){
        return(
            <div class="Nav">
                <ul class="Nav-list">
                    <li class="Nav-item">
                        <a href="#" onClick={this.handleClickAboutMe}>Who am I?</a>
                        {this.state.displayAboutMe}
                    </li>
                    <li class="Nav-item">
                        <a href="#" onClick={this.handleClickSkills}>What am I good at?</a>
                        {this.state.displaySkills}
                    </li>
                    <li class="Nav-item">
                        <a href="#" onClick={this.handleClickExprience}>What have I worked on?</a>
                        {this.state.displayExperience}
                    </li>
                    <li class="Nav-item">
                        <a href="#" onClick={this.handleClickContact}>How can I be contacted?</a>
                        {this.state.displayContactDetails}
                    </li>
                </ul>

            </div>
        );
    }
}

export default NavContent;