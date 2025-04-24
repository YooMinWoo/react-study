import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Word, { IWord } from "./Word.tsx";
import UseFetch from "../hooks/UseFetch.ts";
function Day(){
    const {day} = useParams<{day : string}>();

    // const words : IWord[] = UseFetch(`http://localhost:3001/words?day=${day}`)
    const {data:words, isLoading} = UseFetch<IWord[]>(`http://localhost:3001/words?day=${day}`)

    return (
        <div>
            <h2>Day {day}</h2>
            {isLoading && <span>Loading...</span>}
            <table>        
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </table>
        </div>
    )
}

export default Day;