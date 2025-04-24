import React, { useRef, useState } from "react";
import UseFetch from "../hooks/UseFetch.ts";
import { useNavigate } from "react-router-dom";
import { IDay } from "./DayList.tsx";

function CreateWord(){

    // const days : IDay[] = UseFetch("http://localhost:3001/days");
    const {data:days} = UseFetch<IDay[]>("http://localhost:3001/days");
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const engRef = useRef<HTMLInputElement>(null)
    const korRef = useRef<HTMLInputElement>(null)
    const dayRef = useRef<HTMLSelectElement>(null)

    function onSubmit(e : React.FormEvent){
        e.preventDefault();     // 새로고침 방지

        if(!isLoading && dayRef.current && engRef.current && korRef.current){
            setIsLoading(true);

            const day = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value;

            fetch(`http://localhost:3001/words`, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    day : day,
                    eng : eng,
                    kor : kor,
                    isDone : false
                })
            })
            .then(res => {
                if(res.ok){
                    alert("생성이 완료되었습니다.")
                    history(`/day/${day}`)
                    setIsLoading(false);
                }
            })
        }

        
    }

    return (
        <form>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref = {engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref = {korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref = {dayRef}>
                    {days.map(day =>
                            <option key={day.id}>{day.day}</option>
                        )}
                </select>
            </div>
            <button
            style={{
                opacity : isLoading ? 0.3 : 1
            }}
            onClick={onSubmit}>
                {isLoading ? "Saving..." : "저장"}
            
            </button>
        </form>
        
    );
}

export default CreateWord;