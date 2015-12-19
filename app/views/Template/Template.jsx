import React from 'react'
import Header from '../../components/Header/Header.jsx'

import './template.scss'

class Template extends React.Component {
    render() {
        return (
            <div className="template">
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default Template