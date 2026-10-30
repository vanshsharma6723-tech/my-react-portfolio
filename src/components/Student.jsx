function Student(props){
    return(
        <div>
            <h2>Student name: {props.name}</h2>
            <h2>age: {props.age}</h2>
            <h2>Collage: {props.Collage}</h2>
        </div>
    );
}

export default Student;