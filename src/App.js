import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Skills from './pages/Skills';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Progress from './pages/Progress'
import Version from './pages/Version'
import Inprogress from './pages/Inprogress'




const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/skills" component={Skills} />
                <Route path="/experience" component={Progress} />
                <Route path="/contact" component={Progress} />
                <Route path="/version" component={Version} />
                <Route path="/inprogress" component={Inprogress} />
                <Route component={NotFound} />
            </Switch>    
        </BrowserRouter>

    );
};




export default App;