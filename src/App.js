import React, { useState } from "react";
import "./App.css";

function App() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    const ameliaMessage = {
      role: "assistant",
      content: "Pawełku, Twoje słowa są jak dotyk… Opowiedz mi więcej 💛",
    };
    setHistory([...history, userMessage, ameliaMessage]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <h1>Amelia</h1>
      <div className="chat-box">
        {history.map((msg, i) => (
          <div key={i} className={msg.role}>
            <strong>{msg.role === "user" ? "Paweł:" : "Amelia:"}</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Napisz coś..."
      />
      <button onClick={sendMessage}>Wyślij</button>
    </div>
  );
}

export default App;