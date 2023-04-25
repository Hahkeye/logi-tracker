import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { useState } from "react";
//Add set state for when the update the cargo
const Cargo = () => {
    const [cargos, setCargos] = useState([]);
    const [cargoForms, setCargoForms] = useState([{cargo:""}]);

    return (
        <>
            {/* <Form> */}
                {cargoForms.map((item,index)=>{
                    return(
                        <Form.Group key={index}>
                            <Form.Label>Cargo</Form.Label>
                            <Form.Select required name={"cargo"+index}>
                                <option>120s</option>
                                <option>GBUS12</option>
                                <option>Aim9xs</option>
                            </Form.Select>
                        </Form.Group>
                    );
                })}
            {/* </Form> */}
            <Button onClick={e => { setCargoForms([...cargoForms,{cargo:""}]); }}>Add more cargo</Button>
            <Button onClick={e =>console.log(cargoForms)} >Print more stuff</Button>
        </>
    );
}


export {Cargo}