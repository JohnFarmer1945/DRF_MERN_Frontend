import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, password);
  };

  return (
    <div className="container-fluid border rounded text-center p-5 ">
      <form className="border p-3" onSubmit={handleSubmit}>
        <h3 className="text-decoration-underline">Create a new User:</h3>
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
          <div id="emailHelp" className="form-text">
            Please enter a new username.
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
          <div id="emailHelp" className="form-text">
            Please enter your new password.
          </div>
        </div>

        <button disabled={isLoading} type="submit" className="btn btn-primary">
          Create new user.
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
