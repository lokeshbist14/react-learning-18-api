import React, { useEffect, useState } from "react";
import ApiExampleTwo from "./components/ApiExampleTwo";
import ApiExampleThree from "./components/ApiExampleThree";
import ApiExampleFour from "./components/ApiExampleFour";
import ApiExampleFive from "./components/ApiExampleFive";
import ApiExampleSix from "./components/ApiExampleSix";
import ApiExampleSeven from "./components/ApiExampleSeven";
import ApiExampleEight from "./components/ApiExampleEight";
import ApiExampleNine from "./components/ApiExampleNine";
import ApiExampleTen from "./components/ApiExampleTen";
import ApiExampleEleven from "./components/ApiExampleEleven";
import ApiExampleTwelve from "./components/ApiExampleTwelve";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h2>API Example 1</h2>

      {users.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}

      {/* Example 2 */}
      <ApiExampleTwo />

      {/* Example 3 */}
      <ApiExampleThree />

      {/* Example 4 */}
      <ApiExampleFour />

      {/* Example 5 */}
      <ApiExampleFive />

      {/* Example 6 */}
      <ApiExampleSix />

      {/* Example 7 */}
      <ApiExampleSeven />

      {/* Example 8 */}
      <ApiExampleEight />

      {/* Example 9 */}
      <ApiExampleNine />

      {/* Example 10 */}
      <ApiExampleTen />

      {/* Example 11 */}
      <ApiExampleEleven />

      {/* Example 12 */}
      <ApiExampleTwelve />
    </div>
  );
}

export default App;