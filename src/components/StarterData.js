import React, {useState, useEffect} from "react";



function StarterData(){
    const [startData, setStartData] = useState({
        name:"", trail:""
    });
    function captureData(e){
        setStartData({...startData, [e.target.name]: e.target.value})
    }
    function computeStart(e){
            e.preventDefault();
            fetch(`"http://localhost:8004/${startData.trail}"`)            
            }
     
    
    return(
        <div className="rightSide">
            <form onSubmit={computeStart}>
                <label  className="name">Enter Your Name</label><br/>
                <input onChange={captureData} type="text" className="nameText"></input><br/>
                <label  className="trail">Select Trail To Continue</label><br/>
                <input onChange={captureData}   type="radio" name="startTrail" id="trail1" value={"birds"} className="text"/><span className="textA">Birds</span><br/>
                <input onChange={captureData} type="radio" name="startTrail" id="trail2" value={"butterflies"} className="text"/><span className="textA">Butterflies</span><br/>
                <input onChange={captureData} type="radio" name="startTrail" id="trail3" value={"monkeys"} className="text"/><span className="textA">Monkeys</span><br/>
                <input onChange={captureData} type="radio" name="startTrail" id="trail4" value={"trees"} className="text"/><span className="textA">Trees</span><br/>
                <input type="submit" value="Get Started" className="buttons"/>               
            </form>
        </div>
    )

    
}
export default StarterData;