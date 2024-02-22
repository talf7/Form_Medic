import React from "react";
import "../App.css";


function Form() {
    function changeradioother(){
        var other = document.getElementById("other");
        other.value=document.getElementById("inputother").value;
      }
      function setRequired(){
        document.getElementById("inputother").required=true;
      }
      function removeRequired(){
        if(document.getElementById("inputother").required === true){
            document.getElementById("inputother").required = false;
        }
      }
    return (
        <div className="Form">
            <div className="title">Medic questions</div>
            <div className="questions">
                <form method="POST" action="test.txt">
                    <input type="radio" value="A1" name="q1" onClick={removeRequired}/>answer1<br></br>
                    <input type="radio" value="A2" name="q1" onClick={removeRequired}/>answer2<br></br>
                    <input type="radio" value="A3" name="q1" onClick={removeRequired}/>answer3<br></br>
                    <input type="radio" value="A4" name="q1" onClick={removeRequired}/>answer4<br></br>
                    <input type="radio" value="A5" name="q1" onClick={setRequired} id="other" />other<br></br>
                    <input id="inputother" type="text" name="othertext" onChange={changeradioother}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
}
export default Form;
