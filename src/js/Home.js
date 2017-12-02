import React, { PureComponent } from 'react';
import '../styles/App.css';

import { GitHubNode, RzpNode } from './nodes/contentNodes';

class Home extends PureComponent {
    render() {
        return (
            <div className="content-node-container">
                <GitHubNode />
                <RzpNode navigateTo={this.props.navigateTo} />
            </div>
        );
    }
}

export default Home;
