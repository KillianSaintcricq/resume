import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Experience from './../Experience/Experience.jsx';

import './app.scss';

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }

}