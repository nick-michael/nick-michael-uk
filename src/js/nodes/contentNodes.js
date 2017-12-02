import React from 'react';
import BaseNode from './BaseNode';

import githubIcon from '../../img/github.png';
import rzpNodeIcon from '../../img/razer-paint.png';

export const GitHubNode = () => (<BaseNode icon={githubIcon} label="github" onClick={() => openUrl('https://www.github.com/nick-michael')} />)
export const RzpNode = ({ navigateTo }) => (<BaseNode icon={rzpNodeIcon} label="razer-paint" onClick={() => navigateTo('rzp-about')} />)

const openUrl = (url) => {
    window.open(url,'_blank');
};