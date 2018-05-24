import React from 'react';

const DjangoReact=[
    <a href="https://github.com/tdshivendran/django_react" target="_blank">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title boldText">Django-react</h5>
                <h6 class="card-subtitle mb-2 text-muted">https://github.com/tdshivendran/django_react</h6>
                <p class="card-text">A sample Django web application that serves as a guide to integrate Django with ReactJS.</p>
            </div>
        </div>
    </a>

];

const Snort=[
    <a href="https://tdshivendran.github.io/Snort-IDPS/" target="_blank">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title boldText">Snort IDPS</h5>
                <h6 class="card-subtitle mb-2 text-muted">https://tdshivendran.github.io/Snort-IDPS/</h6>
                <p class="card-text">A secure IDPS system that detects and prevents and logs any unusual activity on a network.</p>
            </div>
        </div>
    </a>
];

const Homepage=[
    <a href="https://tdshivendran.github.io/Homepage/" target="_blank">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title boldText">Homepage</h5>
                <h6 class="card-subtitle mb-2 text-muted">https://tdshivendran.github.io/Homepage/</h6>
                <p class="card-text">A sample webpage designed using ReactJS, HTML and CSS that helps in increasing the productivity of users</p>
            </div>
        </div>
    </a>
];

const AnonymousChat=[
    <a href="https://github.com/tdshivendran/anonymous_chat" target="_blank">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title boldText">Anonymous Chat</h5>
                <h6 class="card-subtitle mb-2 text-muted">https://github.com/tdshivendran/anonymous_chat</h6>
                <p class="card-text">A secure chat application server that facilitates anonymous and secure messages transactions.</p>
            </div>
        </div>
    </a>
];

const faultPrediction=[
    <a href="https://www.scopus.com/inward/record.uri?eid=2-s2.0-84942617553&partnerID=40&md5=e6d1c7848c44bd4fbc2ea71b4a4350c8" target="_blank">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title boldText">Fault Prediction</h5>
                <h6 class="card-subtitle mb-2 text-muted">https://www.scopus.com/inward/record.uri?eid=2-s2.0-84942617553&partnerID=40&md5=e6d1c7848c44bd4fbc2ea71b4a4350c8</h6>
                <p class="card-text">A prediction based fault detection algorithm that can detect and isolate faults for highly critical processes.</p>
            </div>
        </div>
    </a>

];

const projectCards=[
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                {DjangoReact}
            </div>
            <div class="col-md-6">
                {Snort}
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                {Homepage}
            </div>
            <div class="col-md-6">
                {AnonymousChat}
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                {faultPrediction}
            </div>
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
        <div class="container">{projectCards}</div>
    </div>
];

export default ExperienceContent;