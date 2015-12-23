import React from 'react';
import Menu from '../../components/Menu/Menu.jsx';

import './template.scss';

class Template extends React.Component {
    render() {
        return (
            <div className="main-template">
                <Menu />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Template;