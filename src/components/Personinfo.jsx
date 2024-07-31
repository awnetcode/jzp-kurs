import { useState } from "react";
import { Tel } from "./Tel";

export const PersonInfo = (props) => {
let stateArray = useState(false);
let isExpanded = stateArray[0];
let setIsExpanded = stateArray[1];

const buttonEl = <button onClick = {() => {
   setIsExpanded(!isExpanded);
}}>
   {isExpanded ? "Ukryj" : "Pokaż"}
   </button>;

return (
   <>
   <h2>{props.name}</h2>
   {buttonEl}
   {isExpanded && (
      <>
   <h3>
    Tel: <Tel tel={props.tel} />
   </h3>
   {props.city && <h3>Miasto: {props.city}</h3>}
      </>
   )}
   <hr/> 
</>
);
}; 