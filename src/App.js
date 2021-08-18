import { useState } from 'react';
import Container from './Components/Container';
import Section from './Components/Section';
import FeedbackCounter from './Components/Feedback';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

export default function App() {
  const [good, setGood] = useState(null);
  const [neutral, setNeutral] = useState(null);
  const [bad, setBad] = useState(null);


  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        return setGood(prevState => prevState + 1);

      case 'neutral':
        return setNeutral(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);

      default: return;
    }
  };

  const getTotal = () => {
    return good + neutral + bad;
  }

  const feedbackOptions = Object.keys({ good, neutral, bad });

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackCounter
          options={feedbackOptions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {getTotal() > 0 ? (
          <Statistics
            options={feedbackOptions}
            feedbackCounter={{ good, neutral, bad }}
            total={getTotal()}
            positiveFeedbackRate={Math.round((good * 100) / getTotal())}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}


