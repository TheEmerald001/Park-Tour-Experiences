import React, { useState } from "react";

function UserForm({ onAddScene }){

    const [formData, setFormData] = useState({
        image: "", name: "", desc: ""
    });

    function handleInput(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:8004/scenes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({image: formData.image, name: formData.name, desc: formData.desc})
        })
        .then(data => {
            onAddScene(data)
            setFormData({...formData, image: "", name: "", desc:""})
        })
    }
    return (
        <form onSubmit={handleSubmit} className="newScene">
        <input onChange={handleInput} value={formData.image} name="url" placeholder="pic url" />
        <input onChange={handleInput} value={formData.name} name="name" placeholder="Species name" />
        <textarea onChange={handleInput} value={formData.desc} name="content" placeholder="Write a tour guide description here..." rows={10} />
        <input type="submit" value="Share your contribution" />
        </form>
    );
}

export default UserForm;