import React from 'react';

import './about.scss';

class About extends React.Component {

    componentDidMount() {
        document.title = this.props.route.page;
    }

    render() {
        return (
            <div className="container about">
                Abouuuuut
            </div>
        );
    }

}

export default About;