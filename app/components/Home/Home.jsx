import React from 'react';
import classNames from 'classnames';

import './home.scss';

class Home extends React.Component {

    render() {
        const componentClass = classNames('container', 'home');
        return (
            <div className={componentClass}>
                Home
            </div>
        );
    }

}

export default Home;