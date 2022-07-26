import React, { useState} from "react";

function Scene({ scene, onDeleteScene }){

    const [id, name, image, description ] = scene;
    const [isSeen, setIsSeen] = useState(false);

    function shiftIsSeen() {
        setIsSeen((isSeen) => !isSeen)
    }

    function deleteScene(){
        fetch(`https://young-refuge-16802.herokuapp.com/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(() => {
            onDeleteScene(id)
        })
    }

    return (
        <>
            <div className="oneSpecies">
                <img className="imgs" src={ require(`"${image}"`)} alt="img" />
                <h5 className="speciesName">${name}</h5>
                <p className="specieDescription">${description}</p>
                <div id="seenBtnCarrier" className="withBtn"><button class="buttons" id="seenBtn" onClick={shiftIsSeen}>{ isSeen ? "Seen On Trail!🥳" : "Not seen"  }</button></div> 
                <div  className="withBtn"><button class="buttons" onClick={deleteScene}>Delete Attraction</button></div> 
                <div id="donateBtnCarrier" className="withBtn"><button class="buttons" id="donateBtn"> Donate $10 </button></div>
            </div>
            <div className="nxtBtn">
                <button className="buttons"><a>Select Next Trail</a></button>
            </div>
        </>
    )
}

export default Scene;