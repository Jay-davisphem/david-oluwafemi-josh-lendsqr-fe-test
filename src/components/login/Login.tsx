import React from "react";
import { useState } from "react";
import { Form } from "react-router-dom";
import Input from "./Input";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else setPwd(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submitted");
  };
  return (
    <div className="login">
      <img src="./lendsqr-logo.png" alt="lendsqr logo" className="logo" />
      <div className="flex">
        <div className="login-image flex-child">
          <img src="./pablo-sign-in 1.svg" alt="pablo sign in image" />
        </div>
        <div className="login-form flex-child">
          <h2 className="l-welcome">Welcome!</h2>
          <p className="l-s-welcome">Enter details to login.</p>
          <Form id="login" method="post" onSubmit={onSubmit}>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <Input
              type="password"
              name="password"
              inset={true}
              value={password}
              onChange={onChange}
            />
            <a href="/forgot-password" className="input link-like">
              FORGOT PASSWORD?
            </a>
            <Input type="submit" name="submit" value="LOG IN" />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
