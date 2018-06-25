import React from 'react';
import TitleSubtitle from './Title/TitleSubtitle';
import NavPage from "./NavPage";

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.handleClickAboutMe = this.handleClickAboutMe.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);
        this.handleClickExprience = this.handleClickExprience.bind(this);
        this.handleClickSkills = this.handleClickSkills.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            displaybody: '',
            display: [
                <div id="MainPage" class="container">
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

        };
    }

    handleClickAboutMe(){
        this.setState({displaybody: <NavPage display="aboutme"/>})
    }

    handleClickSkills(){
        this.setState({displaybody: <NavPage display="skills"/>})
    }

    handleClickExprience(){
        this.setState({displaybody: <NavPage display="experience"/>})
    }

    handleClickContact(){
        this.setState({displaybody: <NavPage display="contact"/>})
    }

    componentDidMount(){
        this.setState({displaybody:this.state.display});
    }


    render(){
        return(
            <div>
                <div id="slice-bg" style={{height: '1126px'}}></div>
                <div>
                    {this.state.displaybody}
                </div>
            </div>

        );
    }
}


export default MainPage;
