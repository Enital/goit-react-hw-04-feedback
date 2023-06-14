import {useState} from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from './Section/Section'
import Notification from './Notification/Notification'

import css from './app.module.css'

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addReview = event => {
    switch (event.target.textContent) {
      case 'Good': setGood(prevState => prevState+1); break; 
      case 'Neutral': setNeutral(prevState => prevState+1); break;
      case 'Bad': setBad(prevState => prevState+1); break;
      default: return;
    }
  }
  const countTotalFeedback = () => {
    return good+neutral+bad;
  };
    
  const countPositiveFeedbackPercentage = () => {
    if (total > 0 && good>0) {
      return Math.round((good * 100) / total);
    }
  }
  
  const total = countTotalFeedback();
  const positiveReview = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={addReview} />
      </Section>

      {total > 0 ? (
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
        <Notification message="There is no feedback" />
      )}
    </div>
  )
};