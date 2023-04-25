import React, { useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { Button, Form } from 'react-bootstrap';
import { Run, RunProps } from "./components/Run";
import { Cargo } from './components/Cargo';

interface FormElements extends HTMLFormControlsCollection {
  callsign: HTMLInputElement,
  cargo: HTMLInputElement,
  ch: HTMLInputElement,
  de: HTMLInputElement,
  to: HTMLInputElement

}
interface TextFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

interface Board {
  logi: any;
}
function App() {
  const [runs, setRuns] = useState<RunProps[]>([]);
  const handleSubmit = (event: React.FormEvent<TextFormElement>) =>{
    event.stopPropagation();
    event.preventDefault();
    console.log("before");
    const form = event.currentTarget;
    console.log(form.elements);
    if(form.elements.callsign.value.length > 0 && form.elements.cargo.value.length > 0 && form.elements.ch.value.length>0 && form.elements.de.value.length>0 && form.elements.to.value.length>0 ){
      setRuns([...runs,{callsign: form.elements.callsign.value, cargo: form.elements.cargo.value, ch: form.elements.ch.value, de: form.elements.cargo.value, to: form.elements.to.value}]);
      console.log(runs);
    }
    console.log("Nothing was entered.");
  
  };
  return (
    <div className="App">
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous" 
      />
      
      <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
               <Form.Label>CallSign</Form.Label> 
               <Form.Control required type="text" placeholder="Shakira 1-1" name="callsign"/>
            </Form.Group>
            <Form.Group>
               <Form.Label>Takeoff</Form.Label> 
               <Form.Control required type="text" placeholder="Minhad" name="to"/>
            </Form.Group>
            <Form.Group>
               <Form.Label>Destination</Form.Label> 
               <Form.Control required type="text" placeholder="Lar" name="de"/>
            </Form.Group>
            <Form.Group>
               <Form.Label>Radio Channel</Form.Label> 
               <Form.Control required type="text" placeholder="30 FM" name="ch"/>
            </Form.Group>
            {/* <Form.Group>
                <Form.Label>Cargo</Form.Label>
                <Form.Select required name="cargo">
                    <option>120s</option>
                    <option>GBUS12</option>
                    <option>Aim9xs</option>
                </Form.Select>
            </Form.Group> */}
            <Cargo/>
            <Button type="submit">Create new run</Button>
      </Form>
      <Button onClick={() =>console.log(runs)}>pirnt</Button>
      <Board logiscRuns={runs}/>
    </div>
    
  );
}

export default App;
