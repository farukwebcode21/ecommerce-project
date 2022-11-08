import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useEffect } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    navigate("/");
  }

  const handleCreateUser = (e) => {
    if (password !== confirmPassword) {
      setError("Your passwords didn't match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">SignUp</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              onBlur={handleConfirmPassword}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="SignUp" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <div className="border-line">
          <div></div>
          Or
          <div></div>
        </div>
        <div className="google-signin">
          <p>
            <span>
              <FcGoogle />
            </span>
          </p>
          <p>Googel signin</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
