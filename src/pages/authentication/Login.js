import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
        .then(() => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="left">
          <h1>Event-BIT.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          {err && <p>{err}</p>}
          <h1>Login</h1>
          <div className="login-form">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button onClick={handleLogin}>Login</button>
            <a
              href="/#"
              onClick={() => navigate("/auth/register")}
              style={{ textDecoration: "none" }}
            >
              CREATE NEW ACCOUNT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
