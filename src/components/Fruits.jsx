function Fruits(props){
return(
    <div>
        <h2>Fruits List:</h2>
        {props.list.map((fruit)=> (
            <h3 key={fruit}>{fruit}</h3>
        ))}
    </div>
);
}

export default Fruits;