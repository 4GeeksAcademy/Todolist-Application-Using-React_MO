import React, { useState } from "react";
// Create your first component
const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };
    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5">My ALLS ITEMS</h1>
                <ul>
                    <li>
                        <input
                            type="text"
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            placeholder="What do you need to do"
                        />
                    </li>
                    {todos.map((item, index) => (
                        <li key={index}>
                            {item} {" "}
                            <i className="fa-solid fa-xmark" onClick={() => setTodos(todos.filter((_, i) => i !== index))} />
                        </li>
                    ))}
                    <li>Make the bed <i className="fa-solid fa-xmark" /></li>
                    <li>Wash hands <i className="fa-solid fa-xmark" /></li>
                    <li>Walk the dog <i className="fa-solid fa-xmark" /></li>
                    <li>EAT! <i className="fa-solid fa-xmark" /></li>
                </ul>
            </div>
            <div>20 tasks</div>
        </div>
    );
};
export default Home;