import React, { useState } from "react";

function ApiExampleSeven() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const addUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      }
    );

    const data = await response.json();

    setMessage(`User created: ${data.name}`);
  };

  return (
    <div>
      <h2>API Example 7 - POST</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addUser}>Add User</button>

      <p>{message}</p>
    </div>
  );
}

export default ApiExampleSeven;