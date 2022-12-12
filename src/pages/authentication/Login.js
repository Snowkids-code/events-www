import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { addUserData, fetchUser } from "../../reducers/user.reducer";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const status = useSelector(state => state.userReducer.loading)

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

  const handleReduxLogin = (e) => {
    e.preventDefault();
    dispatch(addUserData(inputs));
    dispatch(fetchUser(inputs))
  };

  useEffect(() => {
    if (status === "fulfilled") {
      navigate("/")
    }
  }, [status])

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
            <button onClick={handleReduxLogin}>Login</button>
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
