import React from "react";
import { useState } from "react";
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
      <h2 className="l-welcome">Welcome!</h2>
      <p className="l-s-welcome">Enter details to login.</p>
      <form id="login" method="POST" onSubmit={onSubmit}>
        <Input type="email" name="email" value={email} onChange={onChange} />
        <Input
          type="password"
          name="password"
          inset={true}
          value={password}
          onChange={onChange}
        />
        <Input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
