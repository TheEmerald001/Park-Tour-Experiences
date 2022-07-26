import React from "react";
import Scene from "./Scene";

function SceneryContainer({ scenes, onDeleteScene}){
    
    const sceneListing = scenes.map((scene) => {
        return <Scene key={scene.id} scene={scene} onDeleteScene={onDeleteScene}/>
    })

    return(
        <div className="allSpecies">
            {sceneListing}
        </div>
    );
}

export default SceneryContainer;