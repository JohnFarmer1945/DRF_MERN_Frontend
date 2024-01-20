import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <div className="container-fluid border rounded text-center p-5 ">
      <form className="border p-3" onSubmit={handleSubmit}>
        <h3 className="text-decoration-underline">Signup</h3>
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
            We'll never share your email with anyone else.
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
        </div>

        <button disabled={isLoading} type="submit" className="btn btn-primary">
          Sign up
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
