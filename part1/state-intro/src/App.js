import { useState } from "react";

const History = (props) => {

  if (props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )

}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Display = ({ counter }) => <div>{counter}</div>

const Buttons = ({ onClick, text }) => {

  return (
    <button onClick={onClick}>
      {text}
    </button>
  )

}

const App = () => {

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)


  const handleLeftClick = () => {

    allClicks.push('L')
    setAll(allClicks)
    setLeft(left + 1)

  }

  const handleRightClick = () => {

    setAll(allClicks.concat('R'))
    setRight(right + 1)

  }

  return (

    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <br />
      <History allClicks={allClicks} />
      <br />
      <br />
      <br />

      <Display counter={counter} />

      <Buttons
        onClick={increaseByOne}
        text="Plus"
      />

      <Buttons
        onClick={decreaseByOne}
        text="Minus"
      />

      <Buttons
        onClick={setToZero}
        text="Zero"
      />


    </div>

  )




}

export default App;
