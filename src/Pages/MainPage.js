import React from 'react';
import TitleSubtitle from '../Title/TitleSubtitle';

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.handleClickAboutMe = this.handleClickAboutMe.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);
        this.handleClickExprience = this.handleClickExprience.bind(this);
        this.handleClickSkills = this.handleClickSkills.bind(this);
    }

    handleClickAboutMe(){
    }

    handleClickSkills(){
    }

    handleClickExprience(){
    }

    handleClickContact(){
    }

    render(){
        return(
            <div>
                <div>
                    <div id="MainPage">
                        <div>
                            <TitleSubtitle/>
                            <div class="Nav">
                                <ul class="Nav-list">
                                    <li class="Nav-item">
                                        <a href="#AboutMe">Who am I?</a>
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
                    </div>
                </div>
            </div>

        );
    }
}


export default MainPage;
