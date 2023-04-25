import { FC } from "react";
// import { Button, Form } from "react-bootstrap";
import  {Run, RunProps}  from "./Run";

interface BoardProps{
    logiscRuns: RunProps[];
}

const Board: FC<BoardProps> = ({logiscRuns}) => {
    
    return (
        <>
            <h1>Active Cargo Runs</h1>
            <br></br>
            {logiscRuns.map((run,index)=>{
                return <Run key={index} {...run}/>
            })}
        </>
    );
}

export { Board }