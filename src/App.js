import React, { Component } from 'react';
import TitleSubtitle from './Title/TitleSubtitle';
import NavContent from './Nav/NavContent';

const display = [
    <main class="content">
        <div>
            <div>
                <TitleSubtitle/>
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
