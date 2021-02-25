import React, { Component } from "react";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";

import styles from "./App.module.css";

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
        const options = Object.keys(this.state)
        return (
        <div className={styles.container}>
            <Section title="Please leave feedback"> 
                <FeedbackOptions options={options} onLeaveFeedback={this.leaveFeedback}/>        
            </Section>
            <Section title="Statistics">
                <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage().toFixed(0)} />
            </Section>
        </div>
        )
    }
}
export default App;
