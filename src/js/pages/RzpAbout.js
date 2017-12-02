import React, { PureComponent } from 'react';

import backArrow from '../../img/back-arrow.svg';
import rzpNodeIcon from '../../img/razer-paint.png';
import rzpSC from '../../img/rzp/rzp_sc.png';
import rzpDemo1 from '../../img/rzp/rzp_demo_1.gif';
import rzpDemo2 from '../../img/rzp/rzp_demo_2.gif';
import rzpDemo3 from '../../img/rzp/rzp_demo_3.gif';

class RzpAbout extends PureComponent {
    render() {
        return (
            <div className="content-page">
                <div className="button-back" onClick={this.props.navigateBack}><img src={backArrow} height="30" width="auto" /></div>
                <div className="header-image">
                    <img src={rzpNodeIcon} height="100" width="100" />
                </div>
                <h2>Razer Paint</h2>
                <div className="content-info">
                    <a href="https://github.com/nick-michael/razer-paint/releases/download/v1.0.0/razer-paint-setup-1.0.0.exe">v1.1.0 - Download</a>
                    <br/><br/>
                    An electron based windows application which lets you paint a design onto your Razer keyboard and create your own animation frame by frame, while updating the LEDs as you draw.
                    <h3>Tools</h3>
                    <ul>
                        <li>Paint Brush - Paints the selected colour onto the canvas</li>
                        <li>Colour Picker - Selects a colour by clicking on the canvas</li>
                        <li>Eraser - Removes colour from the canvas</li>
                        <li>Fill Tool - Click on a pixel to change each matching pixel to the selected colour</li>
                        <li>Keyboard Paint (Toggle) - Pressing a key on the keyboard will change its colour to the selected colour</li>
                        <li>Undo - Undo last change to the canvas</li>
                        <li>Redo - Redo last change to the canvas</li>
                        <li>Copy - Copies the contents of the canvas to the 'clipboard'</li>
                        <li>Paste - Pastes the contents of the 'clipboard' onto the canvas</li>
                        <li>Capture Frame - Adds the contents of the canvas as a frame at the end of the animation</li>
                        <li>Edit Frame (Toggle) - Any changes to the canvas are applied to the currently selected frame</li>
                        <li>Insert Frame - Adds the contents of the canvas as a frame immediately after the currently selected frame</li>
                        <li>Delete Frame - Deletes the currently selected frame</li>
                        <li>Save - Save your animation in the '.rzp' format</li>
                        <li>Open - Open a '.rzp' file</li>
                        <li>Play/Pause (Toggle) - Cycles through the animation frames at the selected framerate</li>
                        <li>Reverse (Toggle) - Cycles through the animation frames in reverse at the selected framerate</li>
                        <li>FPS (Slider) - Selects the framerate at which to play animations</li>
                    </ul>
                    <h3>Shortcuts</h3>
                    <ul>
                        <li>Right Click On Canvas (Paint Brush/Colour Picker) - Behaves like the eraser</li>
                        <li>Right Click On Canvas (Fill Tool) - Erases each matching pixel</li>
                        <li><kbd>ctrl + c</kbd> - Copies the contents of the canvas to the 'clipboard'</li>
                        <li><kbd>ctrl + v</kbd> - Pastes the contents of the 'clipboard' onto the canvas</li>
                        <li><kbd>ctrl + z</kbd> - Undo last change to the canvas</li>
                        <li><kbd>ctrl + shift + z</kbd> - Redo last change to the canvas</li>
                        <li><kbd>space bar</kbd> - Toggle Play/Pause</li>
                        <li><kbd>arrow right</kbd> - Select next animation frame</li>
                        <li><kbd>arrow left</kbd> - Select previous animation frame</li>
                    </ul>
                    <img src={rzpSC} height="auto" width="100%" />
                    <br/>
                    <img src={rzpDemo1} height="auto" width="100%" />
                    <br/>
                    <img src={rzpDemo2} height="auto" width="100%" />
                    <br/>
                    <img src={rzpDemo3} height="auto" width="100%" />
                </div>
            </div>
        );
    }
}

export default RzpAbout;
