import React, { useState } from "react";

function ApiExampleEight() {
  const [name, setName] = useState("Lokesh");
  const [message, setMessage] = useState("");

  const updateUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      }
    );

    const data = await response.json();

    setMessage(`User updated: ${data.name}`);
  };

  return (
    <div>
      <h2>API Example 8 - PUT</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={updateUser}>Update User</button>

      <p>{message}</p>
    </div>
  );
}

export default ApiExampleEight;