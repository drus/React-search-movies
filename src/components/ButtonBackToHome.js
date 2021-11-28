import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export const ButtonBackToHome=class extends Component {
    render() {
        return (
            <Link className="button is-link" to="/">Go back</Link>
        )
    }
}
