import React from 'react';
import TypeIt from 'typeit';

class TitleSubtitle extends React.Component {
    componentDidMount(){
        new TypeIt('.type-it', {
            strings: ['<span class="name">Shivendran</span>','<span class="name">Tiruchanpalli</span>,'],
            speed: 75,
            lifeLike: false,
            nextStringDelay: 0,
            cursor: false,
        })
    }
    render(){
        return(
            <div>
                <h1 class="Hero-title">I'M
                    <span class="type-it"></span>
                </h1>
                <div class="Hero-bottomWrapper">
                    <h2 class="Hero-subTitle">
                        A web developer.
                        <span id="IconsWrap">
                            <a id="Icon" href="https://github.com/tdshivendran" target="_blank" rel="noopener noreferrer"><span class="fa fa-github"> </span></a>
                            <a id="Icon" href="https://www.linkedin.com/in/tdshivendran/" target="_blank" rel="noopener noreferrer"><span class="fa fa-linkedin-square"> </span></a>
                        </span>
                    </h2>
                </div>
            </div>
        );
    }
}

export default TitleSubtitle;


