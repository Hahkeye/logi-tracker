import { Button } from "react-bootstrap";
import { Cargo } from "./Cargo"
import React, {FC} from 'react';


interface RunProps {
    callsign: String,
    to: String,
    de: String,
    ch: String,
    cargo: String
}


const Run: FC<RunProps> = ({callsign, to, de, ch, cargo}) => {
    return (
        <div className="run">
            <div className="run-body">
                <h2>Callsign: {callsign} </h2>
                <p>Takeoff: {to}</p>
                <p>Destination: {de}</p>
                <p>Can Be Found on: {ch}</p>
                <p>Carrying: {cargo}</p>
                </div>
            <div className="run-buttons">
                <Button>remove</Button>
            </div>
        </div>
    );
}
export type {RunProps}
export {Run}