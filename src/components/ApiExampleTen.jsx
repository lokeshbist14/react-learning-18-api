import React, { useState } from "react";

function ApiExampleTen() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const data = await response.json();

    setUser(data);
  };

  return (
    <div>
      <h2>API Example 10 - Dynamic User</h2>

      <input
        type="number"
        placeholder="Enter user ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button onClick={getUser}>Get User</button>

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default ApiExampleTen;