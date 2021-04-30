import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    render() {
        return (
            <div>
                <button onFocus={this.inFocus} onBlur={this.outOfFocus}></button>
            </div>
        )
    }

    outOfFocus = () => {
        console.log("Hey! Eyes on me!")
    }

    inFocus = () => {
        console.log("Good!")
    }
}
