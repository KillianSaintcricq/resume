import React, { Component } from 'react';
import Parallax from '../Parallax/Parallax.jsx';

import './experiences.scss';

export default class Experiences extends Component {

    render() {
        return (
            <Parallax imageUrl="../../images/amsterdam.jpg" classes="experiences">
                <div className="arrow">
                    <i className="material-icons icon">keyboard_arrow_left</i>
                </div>
                <div className="container">
                    <div>Exp1</div>
                    <div>Exp2</div>
                    <div>Exp3</div>
                </div>
                <div className="arrow">
                    <i className="material-icons icon">keyboard_arrow_right</i>
                </div>
            </Parallax>
        );
    }

}