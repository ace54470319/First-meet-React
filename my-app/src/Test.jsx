import React, { useEffect, useState } from "react";

function Conunter(props){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `you clicked ${count} times`;
    });

    return(
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={()=>setCount(count+1)}>클릭</button>
        </div>
    );
}