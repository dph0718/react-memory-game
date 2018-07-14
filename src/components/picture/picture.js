import React, { Component } from 'react';
import './picture.css'

class Picture extends Component {

    render() {
        return (
            <img onClick={() => this.props.handleClick(this.props.id)} src={this.props.image} alt={this.props.name} title={this.props.name} />
        )
    }
}

export default Picture;

