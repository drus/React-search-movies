import React, { Component } from 'react'

export const Title=class extends Component {

    render() {
        return (
            <h1 className="title">{this.props.children}</h1>
        )
    }
}
