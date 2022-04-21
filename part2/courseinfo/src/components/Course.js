const Header = ({ course }) => {

    return (
        <h1>{course.name}</h1>
    )

}

const Part = (props) => {

    return (
        <p>
            {props.part.name} {props.part.exercices}
        </p>
    )

}

const Content = ({ course }) => {

    return (
        <div>
            {course.parts.map((part) => <Part key={part.id} part={part} />)}
        </div>
    )

}

const Total = ({ course }) => {

    const total = course.parts.reduce((sum, part) => sum + part.exercices, 0)

    return (
        <h2>Total of exercices: {total}</h2>
    )

}

const Course = ({ course }) => {

    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )

}
export default Course