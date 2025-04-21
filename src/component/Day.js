import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import Word from "./Word";
function Day(){
    const day = useParams().day;
    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    )) 
    return (
        <div>
            <h2>Day {day}</h2>
            <table>        
                {wordList.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </table>
        </div>
    )
}

export default Day;