import React from 'react';
import Navigation from '../components/Navigation';

const Skills = () => {
    return (
        <div className="skills">
            <Navigation/>
            <div className="skillsContent">
                <div className="content">
                    <h1>SKILLS</h1>
                    <div className="test">
                    <h3>OPERATING SYSTEM:</h3>
                    <i className="fab fa-redhat"></i>
                    <i className="fab fa-centos"></i>
                    <i className="fab fa-windows"></i>
                    </div>
                    <h3>CLOUD:</h3>
                    <i className="fab fa-aws"></i>
                    <i className="fab fa-google"></i>
                    <h3>CONTAINERS:</h3>
                    <i><span className="iconify" data-icon="mdi-kubernetes" data-inline="false"></span></i>
                    <i className="fab fa-docker"></i>
                    <h3>PROGRAMMING LANGUAGES:</h3>    
                    <i className="fab fa-python"></i>
                    <i className="fab fa-node-js"></i>
                    <h3>CI/CD:</h3>
                    <i className="fab fa-jenkins"></i>

                    
                   
                   
                </div>
            </div>
        </div>
    );
};

export default Skills;