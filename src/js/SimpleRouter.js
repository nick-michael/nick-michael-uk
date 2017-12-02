import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '../styles/router.css';

const Panel = ({ children, ...props }) => {
    return (
    <CSSTransition
        {...props}
        timeout={{
            enter: 0,
            exit: 800,
        }}
        classNames={`${props.reverse ? "panel-reverse" : "panel" }`}
    >
        {children}
    </CSSTransition>
    )
};

class SimpleRouter extends Component {
    constructor(props) {
        super(props)
        this.state = { panels: [props.home], history: [], reverse: false }
    }

    navigateTo = (route) => {
        this.setState({ reverse: false }, () => {
            this.setState({ 
                panels: [ ...this.state.panels.slice(1), route],
                history: [ ...this.state.history, this.state.panels[0] ]
            });
        });
    }

    navigateBack = () => {
        this.setState({ reverse: true }, () => {
            this.setState({
                panels: [ this.state.history.slice(-1)[0]],
                history: this.state.history.slice(0, -1)
            });
        });
    }

    render() {
        return (
            <div className="router" >
                <TransitionGroup className="panel-set">
                    {this.state.panels.map((panel) => (
                        <Panel key={panel} reverse={this.state.reverse}>
                            <div className={`panel ${this.state.reverse ? "panel-reverse" : ""}`}>
                                {React.createElement(this.props.routes[panel], { navigateTo: this.navigateTo, navigateBack: this.navigateBack })}
                            </div>
                        </Panel>
                    ))}
                </TransitionGroup>
            </div>
        );
    }
}

export default SimpleRouter;
