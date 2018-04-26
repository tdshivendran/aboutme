import React, { Component } from 'react';

const MySkills=[
    <div>
        <p>Python</p>
        <p class="progress">
            <p class="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>C</p>
        <p class="progress">
            <p class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>C++</p>
        <p class="progress">
            <p class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>React JS</p>
        <p class="progress">
            <p class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>Django/Flask</p>
        <p class="progress">
            <p class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>Database - MySQL/SQL</p>
        <p class="progress">
            <p class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>MATLAB</p>
        <p class="progress">
            <p class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>HTML/CSS</p>
        <p class="progress">
            <p class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>Networking - TCP/IP, UDP</p>
        <p class="progress">
            <p class="progress-bar w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
    </div>

];

const MyTools=[
    <div>
        <p>OS - Unix, Windows</p>
        <p class="progress">
            <p class="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>JetBrains - PyCharm, Webstorm</p>
        <p class="progress">
            <p class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>Versoining - Git, GitHub, SVN </p>
        <p class="progress">
            <p class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>Apache Tomcat</p>
        <p class="progress">
            <p class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>VMware</p>
        <p class="progress">
            <p class="progress-bar w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
        <p>MS Office</p>
        <p class="progress">
            <p class="progress-bar w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></p>
        </p>
    </div>
];

const SkillsContent =[
    <div class="innerContent">
        <h2>Specialities</h2>
        <p>
            I relish the joy of building tools and custom web applications. My areas of specialization include Web frameworks with python, front-end web development, team-work, and patience.
            Here are some of my skills and tools:
        </p>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2>Skills</h2>
                    {MySkills}
                </div>
                <div class="col" id="colBorder">
                    <h2>Tools</h2>
                    {MyTools}
                </div>
            </div>
        </div>

    </div>
];

export default SkillsContent;