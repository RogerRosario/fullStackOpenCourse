
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );

}

const Part1 = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercices1}
      </p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>
        {props.part2} {props.exercices2}
      </p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
      <p>
        {props.part3} {props.exercices3}
      </p>
    </div>
  )
}

const Content = () => {

  const part1 = "Fundamentals of React"
  const exercices1 = 10
  const part2 = "Using props to pass data"
  const exercices2 = 7
  const part3 = "State of a component"
  const exercices3 = 14


  return (
    <div>

      <Part1 part1={part1} exercices1={exercices1} />

      <Part2 part2={part2} exercices2={exercices2} />

      <Part3 part3={part3} exercices3={exercices3} />

    </div>
  );

}

const Total = (props) => {
  return (
    <div>
      <p> Total number of exercices:  {props.exercices1 + props.exercices2 + props.exercices3} </p>
    </div>
  );

}

const App = () => {

  const course = {

    name: "Half Stack Application development",

    parts: [
      {
        name: "Fundamentals of React",
        exercices: 10
      },

      {
        name: "Using props to pass data",
        exercices: 7
      },

      {
        name: "State of a component",
        exercices: 14
      }
    ]
  }

  const [first, second, third] = course.parts;

  return (

    <div>

      <Header course={course.name} />

      <Content part1={first} part2={second} part3={third} />

      <Total exercices1={first.exercices} exercices2={second.exercices} exercices3={third.exercices} />

    </div>

  );

}

export default App