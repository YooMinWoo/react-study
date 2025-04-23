import { useParams } from "react-router-dom";
import Word from "./Word";
import UseFetch from "../hooks/UseFetch";
function Day(){
    const {day} = useParams();
    
    const words = UseFetch(`http://localhost:3001/words?day=${day}`)

    return (
        <div>
            <h2>Day {day}</h2>
            <table>        
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </table>
        </div>
    )
}

export default Day;