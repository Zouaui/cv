import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Fayçal ZOUAOUI</h1>
                    <h2>Cloud Ingineer</h2>
                    <div className="pdf">
                        <a href="./media/Faycal_ZOUAOUI.DOCX" target="_blank">Télécharger le CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;