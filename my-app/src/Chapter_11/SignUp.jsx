import React from "react";
import { useState } from "react";

function SignUp(props){
    const [name,setName] = useState("");
    const [gender, setGender] = useState("남자");

    const handleChangeName = (event) =>{
        setName(event.target.value);
    };

    const handleChangerGender = (event) =>{
        setGender(event.target.value);
    }

    const handleSubmit = (event) =>{
        alert(`이름 : ${name}, 성별 : ${gender}`);
        event.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br/>
            <label>
                성별:
                <select onChange={handleChangerGender} value={gender} name="" id="">
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;