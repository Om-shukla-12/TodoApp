import React,{useEffect, useState} from "react";

export const TodoDateTime = () => {

     const[dateTime,setDateTime] = useState("");

    useEffect(() => {
 const interval = setInterval(() => {
       const now = new Date();
       const FormattedDate = now.toLocaleDateString();
       const FormattedTime = now.toLocaleTimeString();
       setDateTime(`${FormattedDate}-${FormattedTime}`);
   }, 1000);
   return () => clearInterval(interval);
},[])
    return (
        <h1 className="date-time">{dateTime}</h1>
    )
}