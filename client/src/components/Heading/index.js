import React, { Component } from "react";
import './heading.css'

class Heading extends Component  {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Welcome to React Books Search!</h1>
                    <p className="lead" id="head-info">React Books Search uses React.js and the Google Books API to allow for searching and saving of your favorite books.</p>
                    <p className="lead" id="me">This application was made by Alexander Petroski. Visit my GitHub <a id="gitme" href="https://github.com/Petrovski" target="_blank" rel="noopener noreferrer">here!</a></p>
                </div>
            </div>
        )
    }
}

export default Heading;