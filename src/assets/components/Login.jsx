import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <>
      <div className="container-fluid border rounded text-center p-5 ">
        <form className="border p-3" onSubmit={handleSubmit}>
          <h3 className="text-decoration-underline">Login</h3>
          <div className="m-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="m-5 ">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div id="passwordHelp" className="form-text">
              <div id="emailHelp" className="form-text">
                Please pay attention to uppercase and lowercase letters.
              </div>
            </div>
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </>
  );
};

export default Login;
