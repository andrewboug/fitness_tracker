import { useState } from "react";
import { registerUser, loginUser } from "../../api/users";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";

export default function AuthForm() {
  const { pathname } = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let result;
      if (pathname === "/login") {
        result = await loginUser(username, password);
      } else {
        result = await registerUser(username, password);
      }
      console.log("Result in Component: ", result);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      console.error(error);
    }
    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <h1>Authorize User</h1>
      <form className="gradient-border" id="box1" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button id="button1">
          {pathname === "/login" ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}
