
import '../App.css';

export function StudentCard(props){
     const {name,age, course, batch, EditStudent } = props;
    return(
        <div className="StudentCard">
           <h2 style={{fontSize:'1rem'}}> {name}</h2>
           <h2 style={{fontSize:'1rem'}}> {age}</h2>
           <h2 style={{fontSize:'1rem'}}>{course}</h2>
           <h2 style={{fontSize:'1rem'}}>{batch}</h2>
           <button onClick={ EditStudent} >Edit</button>
        </div>  
    )
}