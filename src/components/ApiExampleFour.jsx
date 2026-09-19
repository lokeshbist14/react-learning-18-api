import React, { useEffect, useState } from "react";

function ApiExampleFour() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <div>
      <h2>API Example 4</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default ApiExampleFour;