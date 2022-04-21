import Course from "./components/Course";

const App = () => {

  const course = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercices: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercices: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercices: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercices: 11,
          id: 4
        }
      ]
    },

    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercices: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercices: 7,
          id: 2
        }
      ]
    }
  ]

  return (

    <div>

      {course.map(curse => <Course key={curse.id} course={curse} />)}

    </div>

  );

}

export default App