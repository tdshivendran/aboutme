import React, { Component } from 'react';
import TypeWriter from '../TypeWriter';

class TitleSubtitle extends React.Component {
    render(){
        return(
            <div>
                <h1 class="Hero-title">I'M
                    <TypeWriter
                        strings='<span id="name">SHIVENDRAN TIRUCHANPALLI</span>,'
                        speed={90}
                    />
                </h1>
                <div class="Hero-bottomWrapper">
                    <div class="rw-words rw-words-1">
                        A
                        <span>Software Developer</span>
                        <span>Front End Developer</span>
                        <span>Web Developer</span>
                    </div>
                    <a id="SocialIcon" href="https://github.com/tdshivendran" target="_blank"><span class="fa fa-github">  </span></a>
                    <a id="SocialIcon" href="https://www.linkedin.com/in/tdshivendran/" target="_blank"><span class="fa fa-linkedin-square">  </span></a>
                </div>
            </div>
        );
    }
}

export default TitleSubtitle;

