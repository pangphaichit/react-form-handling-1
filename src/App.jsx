import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("");
  const [inputMessage, setInputMessage] = useState("");

const messageInputHandler = (event) => {
  setInputMessage(event.target.value)
};

const updateTextButtonHandler = () => {
  setGreetingMessage(inputMessage)
};

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage ? greetingMessage : "Greeting Message"}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text"value={inputMessage} onChange={messageInputHandler}/>
      </div>

      <div className="buttons">
        <button onClick={updateTextButtonHandler}>Update text</button>
      </div>
    </div>
  );
}

export default App;
