// React imports
import React, { useState } from 'react';
// Components imports
import Section from './components/Section';
import PageTitle from './components/PageTitle';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countFeedback = event => {
    const { name } = event.currentTarget;
    setFeedback({ ...feedback, [name]: feedback[name] + 1 });
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce(
      (total, quantity) => total + quantity,
    );
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((feedback.good / countTotalFeedback()) * 100)
      : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <PageTitle title="Espresso Cafe Stats" />

      <Section title="Please leave your feedback">
        <FeedbackOptions feedback={feedback} onLeaveFeedback={countFeedback} />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            feedback={feedback}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};

// class App extends Component {
//

//   render() {
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <PageTitle title="Espresso Cafe Stats" />

//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             feedback={this.state}
//             onLeaveFeedback={this.countFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total ? (
//             <Statistics
//               feedback={this.state}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

export default App;
