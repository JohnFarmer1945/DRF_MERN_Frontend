import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <>
      <div className="container-fluid border rounded text-center p-5 ">
        <form className="border p-3" onSubmit={handleSubmit}>
          <h3 className="text-decoration-underline">Login</h3>
          <div className="m-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div id="emailHelp" className="form-text">
              “When I left you, I was but the learner. Now I am the master.”
            </div>
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
                “I am the Senate.”
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
