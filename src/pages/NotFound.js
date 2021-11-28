import React, { Component } from 'react'
import { Title } from '../components/Title'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

export default class NotFound extends Component {
    render() {
        return (
            <div>
            <Title>404!</Title>
            <h2 class="subtitle">Page ot found</h2>
            <p><ButtonBackToHome/></p>
            </div>
        )
    }
}
