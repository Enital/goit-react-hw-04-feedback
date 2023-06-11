import React from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from './Section/Section'
import Notification from './Notification/Notification'

import css from './app.module.css'

class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  addReview = (event) => {
    let key = event.target.textContent.toLowerCase();
    this.setState(state => ({ [key]: state[key] + 1 }));
  }
  
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el);
  };

  countPositiveFeedbackPercentage = (total) => {
    if (total > 0 && this.state.good>0) {
      return Math.round((this.state.good * 100) / total);
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    let total = this.countTotalFeedback();
    const positiveReview = this.countPositiveFeedbackPercentage(total);

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.addReview} />
        </Section>

        {total>0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={positiveReview}
            />
          </Section>
        ) : (
            <Notification message="There is no feedback"/>
        )}
      </div>
    )
  };
};

export default App;