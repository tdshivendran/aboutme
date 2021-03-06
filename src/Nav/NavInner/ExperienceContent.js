import React from 'react';

const DjangoReact=[
    <a href="https://github.com/tdshivendran/django_react" target="_blank" rel="noopener noreferrer">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title boldText">Django-react</h5>
                <h6 class="card-subtitle mb-2 text-muted">https://github.com/tdshivendran/django_react</h6>
                <p class="card-text">A sample Django web application that serves as a guide to integrate Django with ReactJS.</p>
                <footer class="text-muted">Python/Django, HTML, React JS</footer>
            </div>
        </div>
    </a>

];

const Snort=[
    <a href="https://tdshivendran.github.io/Snort-IDPS/" target="_blank" rel="noopener noreferrer">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title boldText">Snort IDPS</h5>
                <h6 class="card-subtitle mb-2 text-muted">https://tdshivendran.github.io/Snort-IDPS/</h6>
                <p class="card-text">A secure network router built on Linux, facilitating secure communications and detects, prevents and logs any unusual activity on the network.</p>
                <footer class="text-muted">Snort, TCP/IP, UDP, Secure Networking</footer>
            </div>
        </div>
    </a>
];

const Homepage=[
    <a href="https://tdshivendran.github.io/Homepage/" target="_blank" rel="noopener noreferrer">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title boldText">Homepage</h5>
                <h6 class="card-subtitle mb-2 text-muted">https://tdshivendran.github.io/Homepage/</h6>
                <p class="card-text">A simple new-tab dashboard page featuring quotes, todo, and calendar, aimed to increase the productivity of the users. Built with HTML, CSS and React JS.</p>
                <footer class="text-muted">React JS, HTML, CSS</footer>
            </div>
        </div>
    </a>
];

const AnonymousChat=[
    <a href="https://github.com/tdshivendran/anonymous_chat" target="_blank" rel="noopener noreferrer">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title boldText">Anonymous Chat</h5>
                <h6 class="card-subtitle mb-2 text-muted">https://github.com/tdshivendran/anonymous_chat</h6>
                <p class="card-text">A secure chat application server that facilitates anonymous and secure messages transactions.</p>
                <footer class="text-muted">Java, JSP, Security protocols, Networking</footer>
            </div>
        </div>
    </a>
];

const faultPrediction=[
    <a href="https://www.scopus.com/inward/record.uri?eid=2-s2.0-84942617553&partnerID=40&md5=e6d1c7848c44bd4fbc2ea71b4a4350c8" target="_blank" rel="noopener noreferrer">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title boldText">Fault Prediction</h5>
                <h6 class="card-subtitle mb-2 text-muted">https://www.scopus.com/inward/record.uri?eid=2-s2.0-84942617553&partnerID=40&md5=e6d1c7848c44bd4fbc2ea71b4a4350c8</h6>
                <p class="card-text">A prediction based fault detection algorithm that can detect and isolate faults for highly critical processes.</p>
                <footer class="text-muted">Prediction algorithms, MATLAB</footer>
            </div>
        </div>
    </a>

];

const HoloIntern=[
    <a href="https://github.com/Holochain-Internship/mutual-rating" target="_blank" rel="noopener noreferrer">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title boldText">Mutual Ratings</h5>
                <h6 class="card-subtitle mb-2 text-muted">https://github.com/Holochain-Internship/mutual-rating</h6>
                <p class="card-text">Rating app built on distributed platform in which different users can rate mutually.</p>
                <footer class="text-muted">Holochain, HTML, CSS, Javascript, React JS,</footer>
            </div>
        </div>
    </a>

];

const projectCards=[
    <div class="cardWrap">
        <div class="cardContent">
            {HoloIntern}
        </div>
        <div class="cardContent">
            {Homepage}
        </div>
        <div class="cardContent">
            {DjangoReact}
        </div>
        <div class="cardContent">
            {Snort}
        </div>
        <div class="cardContent">
            {AnonymousChat}
        </div>
        <div class="cardContent">
            {faultPrediction}
        </div>
    </div>
];

const ExperienceContent =[
    <div class="innerContent">
        <h2>Projects</h2>
        <p>
            On the side, I enjoy building tools, guides, and applications to enhance my skills and to make it easier for someone else.
            Here are a few projects that I have worked on.
        </p>
        {projectCards}
    </div>
];

export default ExperienceContent;