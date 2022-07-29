import React, { useState} from "react";
import computeStart from "./StarterData";

function Scene({ scene, onDeleteScene }){

    const {id, name, image, desc } = scene;
    const [isSeen, setIsSeen] = useState(false);

    function shiftIsSeen() {
        setIsSeen((isSeen) => !isSeen)
    }

    function deleteScene(){
        fetch(`http://localhost:8004/birds/${id}`)
        // computeStart()
        .then(res => res.json())
        .then(() => {
            onDeleteScene(id)
        })
    }
 

    return (
        <>
            <div className="oneSpecies">
                <img className="imgs" src = {image} alt='something'/>
                <h5 className="speciesName">{name}</h5>
                <p className="specieDescription">{desc}</p>
                <div className="withBtn">
                   <div className="withBtn"> <button id="seenBtnCarrier" className="buttons" onClick={shiftIsSeen}>{ isSeen ? "Seen On Trail!🥳" : "Not seen"  }</button></div>
                    <div id="donateBtnCarrier" className="withBtn"><button className="buttons" id="donateBtn"> Donate $10 </button></div>
                </div> 
                <div  className="withBtn"><button className="buttons" onClick={deleteScene}>Delete Attraction</button></div> 
                
            </div>
        </>
    )
}

export default Scene;