import React from 'react';

const MySkills=[
    <div>
        <p>Python</p>
        <p class="progress">
            <div class="progress-bar" style={{width: '100%'}} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </p>
        <p>C</p>
        <p class="progress">
            <div class="progress-bar" style={{width: '70%'}} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
        </p>
        <p>C++</p>
        <p class="progress">
            <div class="progress-bar" style={{width: '65%'}} role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
        </p>
        <p>React JS</p>
        <p class="progress">
            <div class="progress-bar" style={{width: '90%'}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </p>
        <p>Django/Flask</p>
        <p class="progress">
            <div class="progress-bar" style={{width: '75%'}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </p>
        <p>Database - MySQL/SQL</p>
        <p class="progress">
            <div class="progress-bar" style={{width: '60%'}} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
        </p>
        <p>MATLAB</p>
        <p class="progress">
            <div class="progress-bar" style={{width: '55%'}} role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
        </p>
        <p>HTML/CSS</p>
        <p class="progress">
            <div class="progress-bar" style={{width: '90%'}} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
        </p>
        <p>Networking - TCP/IP, UDP</p>
        <p class="progress">
            <div class="progress-bar" style={{width: '60%'}} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
        </p>
    </div>

];

const MyTools=[
    <div>
        <p>OS - Unix, Windows</p>
        <p class="progress">
            <span class="progress-bar" style={{width: '100%'}} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></span>
        </p>
        <p>JetBrains - PyCharm, Webstorm</p>
        <p class="progress">
            <span class="progress-bar" style={{width: '80%'}} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></span>
        </p>
        <p>Versoining - Git, GitHub, SVN </p>
        <p class="progress">
            <span class="progress-bar" style={{width: '75%'}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></span>
        </p>
        <p>Apache Tomcat</p>
        <p class="progress">
            <span class="progress-bar" style={{width: '50%'}} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></span>
        </p>
        <p>VMware</p>
        <p class="progress">
            <span class="progress-bar" style={{width: '65%'}} role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></span>
        </p>
        <p>MS Office</p>
        <p class="progress">
            <span class="progress-bar" style={{width: '100%'}} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></span>
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
        <div class="skillsWrap">
            <div class="skillsContent">
                <div class="SkillsTools">
                    <h2>Skills</h2>
                    {MySkills}
                </div>
            </div>
            <div class="skillsContent">
                <div class="SkillsTools">
                    <h2>Tools</h2>
                    {MyTools}
                </div>
            </div>
        </div>

    </div>
];

export default SkillsContent;