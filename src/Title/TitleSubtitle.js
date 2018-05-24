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
                    <h2 class="Hero-subTitle">
                        A software developer.
                        <span id="IconsWrap">
                            <a id="Icon" href="https://github.com/tdshivendran" target="_blank"><span class="fa fa-github"> </span></a>
                            <a id="Icon" href="https://www.linkedin.com/in/tdshivendran/" target="_blank"><span class="fa fa-linkedin-square"> </span></a>
                        </span>
                    </h2>
                </div>
            </div>
        );
    }
}

export default TitleSubtitle;

