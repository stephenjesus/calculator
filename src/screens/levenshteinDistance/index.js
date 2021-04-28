import React, { Component } from 'react';

import Congrats from '../../Congrats';

const levenshtein = require('js-levenshtein');

const { renderMetaTag } = require('../../utils/seoTags');

class LevenshteinDistance  extends Component {

    state = {
        source : "book",
        target: "back",
    }

    render() {
        return (
            <div className="MainFormLayout">
                {renderMetaTag({
                    title: "Levenshtein Distance (Edit Distance)",
                    description: "Levenshtein distance is a string metric for measuring difference between two sequences.",
                    keywords: "levenshtein distance , edit distance"
                })}
                {this.renderFormLayout()}
            </div>
        );
    }

    onValueChange = (event) => this.setState({ [event.target.name]: event.target.value });

    calculateDistance = () => {
        const { source, target } = this.state;
        const distance = levenshtein(source, target);
        this.setState({ distance });
    }

    renderFormLayout = () => {
        const { source, target } = this.state;
        return <div className="formLayoutBox">
            <h1 className="textCenter">Levenshtein Distance (Edit Distance)</h1>
            <div onSubmit={this.handleSubmit} className="form-inline">
                <div className="form-group flexColum">
                    <span className="form-label"> Source </span>
                    <input type="string" name="source" value={source} placeholder="Enter Source Text" className="form-control inputDate" onChange={this.onValueChange} />
                    <div className="form-label"> Target </div>
                    <input type="string" name="target" value={target} placeholder="Enter Target Text" className="form-control inputDate" onChange={this.onValueChange} />
                    <button type="submit" className="btn btn-default submitButton" onClick={this.calculateDistance} >Submit</button>
                </div>
            </div>
            {this.renderCongratsBox()}
            <br></br>   <br></br>
            {/* {this.renderKeYPoints()} */}
        </div>
    }

    renderKeYPoints = () => {
        return <ul>
            <li>Fuzzy String Matching Functionality</li>
            <li> The Difference Between Two Strings</li>
            <li>The Levenshtein distance is a number that tells you how different two strings are. The higher the number, the more different the two strings are</li>
        </ul>
    }
    renderCongratsBox = () => (this.state.distance  || this.state.distance  === 0 )&& <h3 className="fade age-state">
        Levenshtein Distance : {this.state.distance}
    </h3>

}

export default LevenshteinDistance;