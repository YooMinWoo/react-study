import React from "react";
import { Link } from "react-router-dom";
import UseFetch from "../hooks/UseFetch.ts";

export interface IDay {
    id : number,
    day: number
}

function DayList(){
    // const days : IDay[] = UseFetch("http://localhost:3001/days");
    const {data:days, isLoading} = UseFetch<IDay[]>("http://localhost:3001/days");

    if(isLoading){
        return <span>Loading...</span>
    }

    
    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default DayList;