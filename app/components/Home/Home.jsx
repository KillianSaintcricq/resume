import React from 'react';

import './home.scss';

class Home extends React.Component {

    componentDidMount() {
        document.title = this.props.route.page;
    }

    render() {
        return (
            <div className="container home">
                Hooome
            </div>
        );
    }

}

export default Home;