import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Skills from './pages/Skills';
import Experience from './pages/Experience'
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/skills" component={Skills} />
                <Route path="/experience" component={Experience} />
                <Route component={NotFound} />
            </Switch>    
        </BrowserRouter>

    );
};

export default App;