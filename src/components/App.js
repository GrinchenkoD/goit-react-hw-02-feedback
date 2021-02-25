import React, { Component } from "react";
import PropTypes from "prop-types";
import Section from "./section/Section";

class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return (good + neutral + bad)
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return this.countTotalFeedback() !== 0 ? (good / this.countTotalFeedback()) * 100 : 0
    };

    leaveFeedback = (event) => {
        const name = event.target.name
        this.setState((prevState) => {
            return {
                [name]: prevState[name] + 1
            }
        })
    }

    render() {
        const { good, neutral, bad } = this.state;

        return (
          <>
            <Section title="Please leave feedback">               
                <button name="good" type="button" onClick={this.leaveFeedback}>Good</button>
                <button name="neutral" type="button" onClick={this.leaveFeedback}>Neutral</button>
                <button name="bad" type="button" onClick={this.leaveFeedback}>Bad</button>
            </Section>

             <Section title="Statistics">
                <ul>
                    <li><p>Good : {good}</p></li>
                    <li><p>Neuntral : {neutral}</p></li>
                    <li><p>Bad : {bad}</p></li>
                    <li><p>Total : {this.countTotalFeedback()}</p></li>
                    <li><p>Positive feedback : {this.countPositiveFeedbackPercentage().toFixed(0)}%</p></li>
                </ul>
            </Section>
            </>
        )
    }
}
export default App;
