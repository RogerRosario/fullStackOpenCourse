import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => {

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

}

const Statistics = ({ good, neutral, bad }) => {

  const all = good + neutral + bad;

  return (
    <div>
      {
        all ?

          <table>
            <tbody>
              <StatisticLine text='Good' value={good} />
              <StatisticLine text='Neutral' value={neutral} />
              <StatisticLine text='Bad' value={bad} />
              <StatisticLine text='All' value={all} />
              <StatisticLine text='Average' value={(good - bad) / all} />
              <StatisticLine text='Positive' value={`${(good / all) * 100}  %`} />
            </tbody>
          </table>
          :
          <p>No feedback given.</p>
      }
    </div>
  )


}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const allVotes = good + neutral + bad;
  // const average = good - bad / allVotes;
  // const positive = (good / allVotes) * 100;
  return (

    <div>
      <h1>Give feedback</h1>

      <Button text='Good' handleClick={() => setGood(good + 1)} />
      <Button text='Neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='Bad' handleClick={() => setBad(bad + 1)} />

      <br />
      <br />
      <br />

      <h1>Statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>

  );
}

export default App;
