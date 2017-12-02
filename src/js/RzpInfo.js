import React, { PureComponent } from 'react';
import BaseNode from './nodes/BaseNode';

import rzpNodeIcon from '../img/razer-paint.png';

const RzpNodeType = "razer-paint";
const GitHubNodeType= "github";

class RzpInfo extends PureComponent {
    render() {
        const navigateTo = this.props.navigateTo;

        return (
            <div className="content-container">
                <BaseNode icon={rzpNodeIcon} label={RzpNodeType} navigateTo={navigateTo} />
            </div>
        );
    }
}

export default RzpInfo;
