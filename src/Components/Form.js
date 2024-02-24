import React from "react";
import { useState } from 'react';
import "../App.css";
import { ExportAsExcel } from "react-export-table";


function Form() {
    const [name, setName] = useState("");
    function changeradioother(){
        var other = document.getElementById("other");
        other.value=document.getElementById("inputother").value;
        setName(other.value)
      }
      function setRequired(){
        document.getElementById("inputother").required=true;
      }
      function removeRequired(){
        if(document.getElementById("inputother").required === true){
            document.getElementById("inputother").required = false;
        }
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
      }
    return (
        <div className="Form">
            <div className="title">Medic questions</div>
            <div className="questions">
                <form onSubmit={handleSubmit}   >
                    <div className="Q1">Question 1</div>
                    <input type="radio" value={name} onChange={(e) => setName("A1")} name="Q1" onClick={removeRequired}/>answer1<br></br>
                    <input type="radio" value="A2" onChange={(e) => setName("A2")} name="Q1" onClick={removeRequired}/>answer2<br></br>
                    <input type="radio" value="A3" name="Q1" onClick={removeRequired}/>answer3<br></br>
                    <input type="radio" value="A4" name="Q1" onClick={removeRequired}/>answer4<br></br>
                    <input type="radio" value="A5" name="Q1" onClick={setRequired} id="other" />other<br></br>
                    <input id="inputother" type="text" name="othertext" onChange={changeradioother}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
}
export default Form;
