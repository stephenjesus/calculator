import React, { Component } from 'react';

import Congrats from '../../Congrats';

const { renderMetaTag } = require('../../utils/seoTags');

class AgeCalculator extends Component {

    state = {
        error: '',
        year_age: null,
        month_age: null,
        day_age: null,
        congrats: false
    }
    addDate = (date) => {
        var mDate = date.toString();
        var yearThen = parseInt(mDate.substring(0, 4), 10);
        var monthThen = parseInt(mDate.substring(5, 7), 10);
        var dayThen = parseInt(mDate.substring(8, 10), 10);

        var today = new Date();
        var birthday = new Date(yearThen, monthThen - 1, dayThen);

        var differenceInMillisecond = today.valueOf() - birthday.valueOf();

        var year_age = Math.floor(differenceInMillisecond / 31536000000);
        var day_age = Math.floor((differenceInMillisecond % 31536000000) / 86400000);
        var month_age = Math.floor(day_age / 30);
        day_age = day_age % 30;

        this.setState({
            date: date,
            year_age: year_age,
            month_age: month_age,
            day_age: day_age,
            congrats: true
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let birthday = document.getElementById('birthday').value;
        this.addDate(birthday);
    }
    render() {
        return (
            <div className="MainFormLayout">
                {renderMetaTag({
                    title: "AGE Calculator Online",
                    description: "Age calculator is online tool to calculate age from date of birth to current date"
                })}
                <div className="formLayoutBox">
                    <h1 className="textCenter">AGE Calculator Online</h1>
                    <div onSubmit={this.handleSubmit} className="form-inline">
                        <div className="form-group flexColum">
                            <input id="birthday" type="date" className="form-control inputDate" onChange={this.handleSubmit} />
                            <button type="submit" className="btn btn-default submitButton" >Submit</button>
                        </div>
                    </div>
                    { this.state.congrats && <div className="fade age-state">  <Congrats date={this.state} /></div>}
                </div>
            </div>

        );
    }
}

export default AgeCalculator;