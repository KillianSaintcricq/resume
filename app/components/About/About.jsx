import React from 'react';
import classNames from 'classnames';

import './about.scss';

class About extends React.Component {

    render() {
        const componentClass = classNames('container', 'about');
        return (
            <div className={componentClass}>
                About
            </div>
        );
    }

}

export default About;