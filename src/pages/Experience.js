import React from 'react';
import Navigation from '../components/Navigation';

const Experience = () => {
    return (
        <div className="experience">
            <Navigation/>
            <div className="experienceContent">
                <div className="content">
                    <h1>Fayçal ZOUAOUI</h1>
                    <h2>Cloud Ingineer</h2>
                    <div className="pdf">
                        <a href="./media/moi.JPG" target="_blank">Télécharger le CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;