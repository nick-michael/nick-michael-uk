import React, { PureComponent } from 'react';
import '../../styles/nodes.css';

export default class ContentNode extends PureComponent {
    render() {
        const { icon, label, backgroundColor = '#fff', onClick } = this.props;

        return (
            <div className={`content-node content-node__${label}`} onClick={onClick}>            
                <div className="content-node-ring content-node-ring__3">
                    <div className="content-node-ring content-node-ring__2">
                        <div className="content-node-ring content-node-ring__1">
                            <div style={{ backgroundColor }} className="content-node-circle">
                                <img src={icon} alt={label} className={`content-node-icon content-node-icon__${label}`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};