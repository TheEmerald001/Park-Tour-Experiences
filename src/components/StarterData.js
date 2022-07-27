import React from "react";

function StarterData(){
//     function computeStart(e){
//         e.preventDefault();
//         fetch(""), {
//             method: "GET"
//         }
//     }
    return(
        <div className="rightSide">
            <form>
                <label  className="name">Enter Your Name</label><br/>
                <input type="text" className="nameText"></input><br/>
                <label  className="trail">Select Trail To Continue</label><br/>
                <input type="radio" name="startTrail" id="trail1" value={"birds"} className="text"/><span className="textA">Birds</span><br/>
                <input type="radio" name="startTrail" id="trail2" value={"butterflies"} className="text"/><span className="textA">Butterflies</span><br/>
                <input type="radio" name="startTrail" id="trail3" value={"monkeys"} className="text"/><span className="textA">Monkeys</span><br/>
                <input type="radio" name="startTrail" id="trail4" value={"trees"} className="text"/><span className="textA">Trees</span><br/>
                <input type="submit" value="Get Started" className="buttons"/>               
            </form>
        </div>
    )

    
}
export default StarterData;