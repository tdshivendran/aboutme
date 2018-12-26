import React from 'react';
import ExperienceContent from "../Nav/NavInner/ExperienceContent";

class ProjectsPage extends React.Component{
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
                                <a id="Nav-link" class="nav-link" href="#AboutMe">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a id="Nav-link" class="nav-link" href="#Skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a id="Nav-link" class="nav-link" href="#Projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a id="Nav-link" class="nav-link" href="#Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container">
                    <div id="NavInner">
                        {ExperienceContent}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsPage;