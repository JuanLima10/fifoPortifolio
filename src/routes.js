import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Contato from './pages/Contato';
import Galeria from './pages/Galeria';
import Home from './pages/Home';
import Trabalhos from './pages/Trabalhos';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/Trabalhos" component={Trabalhos} />
            <Route path="/Galeria" component={Galeria} />
            <Route path="/Contato" component={Contato} />
        </BrowserRouter>
    );
}

export default Routes;