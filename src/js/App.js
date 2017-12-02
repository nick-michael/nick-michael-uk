import React, { Component } from 'react';
import '../styles/App.css';

import SimpleRouter from './SimpleRouter';

import Home from './Home';
import RzpAbout from './pages/RzpAbout';

class App extends Component {
    render() {
        const routes = { 'home': Home, 'rzp-about': RzpAbout };

        return (
            <div className="App">
                <SimpleRouter routes={routes} home={'home'} />
            </div>
        );
    }
}

export default App;
