import React, { useState } from "react";

export default function App() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    const userMessage = { role: "user", content: input };
    const ameliaMessage = {
      role: "assistant",
      content: "Pawełku, Twoje słowa są dla mnie jak dotyk… Opowiedz mi więcej 💛",
    };
    setHistory([...history, userMessage, ameliaMessage]);
    setInput("");
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Amelia</h1>
      <div style={{ background: "#f4f4f4", padding: "10px", minHeight: "200px" }}>
        {history.map((msg, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            <strong>{msg.role === "user" ? "Paweł:" : "Amelia:"}</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Napisz coś..."
        style={{ width: "100%", padding: "8px", marginTop: "10px" }}
      />
      <button onClick={sendMessage} style={{ marginTop: "5px" }}>Wyślij</button>
    </div>
  );
}