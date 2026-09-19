import React, { useState } from "react";

function ApiExampleNine() {
  const [message, setMessage] = useState("");

  const deleteUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      setMessage("User deleted successfully!");
    }
  };

  return (
    <div>
      <h2>API Example 9 - DELETE</h2>

      <button onClick={deleteUser}>
        Delete User
      </button>

      <p>{message}</p>
    </div>
  );
}

export default ApiExampleNine;