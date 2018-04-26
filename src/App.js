import React, { Component } from 'react';
import TypeWriter from './TypeWriter';
import AboutMeContent from './AboutMe';
import ExperienceContent from './ExperienceContent';
import SkillsContent from './SkillsContent';

const ContactDetailsContent=[
    <div class="innerContent">
        <h2>Contact</h2>
        <p>If you have any questions or want to know more about the applications that I’ve built, please send me an email.</p>
        <p><span class="boldText">E-mail: </span>tdshivendran@gmail.com</p>
        <p>Or if you want to talk feel free to call.  Leave me a voicemail if you are unable to reach.
            I will get back to you as soon as I can.</p>
        <p><span class="boldText">Phone: </span>320-443-4854 </p>
        <p>PS – I am open to grabbing coffee, networking and side projects.</p>
    </div>
];

class NavContent extends React.Component{
    constructor(props) {
        super(props);
        this.handleClickAboutMe = this.handleClickAboutMe.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);
        this.handleClickExprience = this.handleClickExprience.bind(this);
        this.handleClickSkills = this.handleClickSkills.bind(this);
        this.state = {
            displayAboutMe: '',
            displayContactDetails: '',
            displayExperience: '',
            displaySkills: ''
        };
    }

    handleClickAboutMe(){
        this.setState({
            displayAboutMe: '',
            displayContactDetails: '',
            displayExperience: '',
            displaySkills: ''
        });
        if (this.state.displayAboutMe === ''){
            this.setState({ displayAboutMe: AboutMeContent});
        }
        else {
            this.setState({ displayAboutMe: ''});
        }
    }

    handleClickSkills(){
        this.setState ({
            displayAboutMe: '',
            displayContactDetails: '',
            displayExperience: '',
            displaySkills: ''
        });
        if(this.state.displaySkills === ''){
            this.setState({displaySkills: SkillsContent});
        }
        else {
            this.setState({displaySkills: ''});
        }
    }

    handleClickExprience(){
        this.setState({
            displayAboutMe: '',
            displayContactDetails: '',
            displayExperience: '',
            displaySkills: ''
        });
        if(this.state.displayExperience === ''){
            this.setState({ displayExperience: ExperienceContent});
        }
        else{
            this.setState({ displayExperience: ''});
        }
    }

    handleClickContact(){
        this.setState({
            displayAboutMe: '',
            displayContactDetails: '',
            displayExperience: '',
            displaySkills: ''
        });
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

const display = [
    <main class="content">
        <div>
            <div class="title">
                <h1 class="Hero-title">I'M
                    <TypeWriter
                        strings='<span id="name">SHIVENDRAN TIRUCHANPALLI</span>,'
                        speed={90}
                    />
                </h1>
                <div class="Hero-bottomWrapper">
                    <h2 class="Hero-subTitle">A software developer. </h2>
                    <a id="SocialIcon" href="https://github.com/tdshivendran" target="_blank"><span class="fa fa-github">  </span></a>
                    <a id="SocialIcon" href="https://www.linkedin.com/in/tdshivendran/" target="_blank"><span class="fa fa-linkedin-square">  </span></a>
                </div>
                <NavContent/>
            </div>
        </div>
    </main>
];

class App extends Component {
    render() {
        return (display);
    }
}

export default App;
