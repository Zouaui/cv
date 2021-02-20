import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    return (
        <div className="sidebar">         
            <div className="id">
                <div className="idContent">
                    <img src="./media/faycal.jpeg" alt="profil-pic"/>
                    <h3>Faycal ZOUAOUI</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home">
                            <span>Home</span>
                            </i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/skills" activeClassName="navActive">
                        <i className="fas fa-memory">
                                <span>Skills</span>
                            </i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/experience" activeClassName="navActive">
                            <i className="fas fa-hard-hat">
                                <span>Experience</span>
                            </i>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                        <i className="fas fa-address-book">
                                <span>Contact</span>
                            </i>
                        </NavLink>
                    </li>
                </ul>
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/fay%C3%A7al-zouaoui-7528a9125/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/zouaui" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"> </i></a>
                        </li>
                      
                    </ul>
                </div>
            </div> 
        </div>
    );
};

export default Navigation;