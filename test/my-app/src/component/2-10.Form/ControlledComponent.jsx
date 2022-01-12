import React, { useState } from "react";

export default function ControlledComponent() {
    const [name, setName] = useState("");
    const [essay, setEssay] = useState(
        "Please write an essay about your favorite DOM element."
        );
    const [flavor, setFlavor] = useState("coconut");
        
    const handleChange = (event) => {
        console.log(event.target);
        const name = event.target.name;
        if (name === 'name') {
            setName(event.target.value);
        }
        if (name === 'essay') {
            setEssay(event.target.value);
        }
        if (name === 'flavor') {
            setFlavor(event.target.value);
        }
    };
    // const handleEssayChange = (event) => {
    //     setEssay(event.target.value);
    // };
    // const handleFlavorChange = (event) => {
    //     setFlavor(event.target.value);
    // };

    const handleSubmit = (event) => {
        alert(`value : ${name}, essay : ${essay}, flavor : ${flavor}`);
        event.preventDefault();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Name:
                <input type="text" name="name" value={name} onChange={handleChange} />
                </label>
                <br />
                <br />
                <label>
                Essay:
                <textarea name="essay" value={essay} onChange={handleChange} />
                </label>
                <br />
                <br />
                <label>
                Pick your favorite flavor:
                <select name="flavor" value={flavor} onChange={handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                </label>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
    }
