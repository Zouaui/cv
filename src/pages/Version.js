import React from 'react';
import Navigation from '../components/Navigation';
// import vers from '../App'/


var pjson = require('../../package.json');


const Experience = () => {
    return (
        <div className="experience">
            <Navigation/>
                <div className="experienceContent">
                    <div className="content">
                    <h1>App Version  {pjson.version} </h1>
                  
                </div>
            </div>
        </div>
    );
};

export default Experience;