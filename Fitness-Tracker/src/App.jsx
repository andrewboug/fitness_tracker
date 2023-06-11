import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AuthForm from "./components/AuthForm";
import useAuth from "./hooks/useAuth";
import { Link } from "react-router-dom";

function App() {
  const { token, user, setToken } = useAuth();
  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <h2>{token ? <p>Welcome {user.username}</p> : null}</h2>
      <div>
        <Link className="nav" to="/">
          Home
        </Link>
        <Link className="nav" to="/register">
          Register
        </Link>
        <Link className="nav" to="/login">
          Login
        </Link>
      </div>
      <Routes>
        <Route className="home" path="/" element={<Home />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/login" element={<AuthForm />} />
      </Routes>
    </div>
  );
}

export default App;
