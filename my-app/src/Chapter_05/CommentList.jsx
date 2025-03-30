import React from "react";
import Comment from "./Comment";


const comments=[
    {
        name: "이인제",
        comments: "안녕하세요, 이인제입니다."
    },
    {
        name: "유재석",
        comments: "리액트가.. 재밌나..?"
    },
    {
        name:"강민경",
        comments: "그래도 해야지"
    }
]

function CommentList(props){
    return (
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comments}></Comment>
                );
            })}
        </div>
    );
}

export default CommentList;