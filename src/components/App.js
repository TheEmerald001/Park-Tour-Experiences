import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import Welcome from "./Welcome";
import Footer from "./Footer";
import SceneryContainer from "./SceneryContainer";
// import Scene from "./Scene";
import UserForm from "./UserForm";

function App(){

  const [scenes, setScenes] = useState([]);
  const [showAddScene, setShowSceneForm] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8004/birds")
    .then(response => response.json())
    .then((data) => {
      setScenes(data)
    })
  }, [])

  function shiftSceneForm(){
    setShowSceneForm(showAddScene => !showAddScene)
  }

  function onAddScene(newScene){
    setScenes([...scenes, newScene])
  }

  function handleDeleteScene(id){
    const newSceneListing = scenes.filter((scene) => scene.id !== id)
    setScenes(newSceneListing)
  }
  return(
    <>
      <NavBar/>
      <Welcome/>
      <SceneryContainer scenes={scenes} onDeleteScene = {handleDeleteScene}/>
      <Footer/>
    </>
  );
}

export default App;
