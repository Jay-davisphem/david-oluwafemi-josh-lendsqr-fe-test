import "./login.scss";
import { useState } from "react";
import { InputProps } from "./login.types";
const Input = ({ type, name, value, onChange, inset = false }: InputProps) => {
  const [showPwd, setShowPwd] = useState(false);
  const pName = name.substring(0, 1).toUpperCase() + name.substring(1); // placeholder name
  const clickShow = () => {
    setShowPwd(!showPwd);
  };

  let input_ = (
    <input
      type={type}
      name={name}
      className="login-input"
      value={value}
      onChange={onChange}
      placeholder={pName}
      required
    />
  );
  if (inset) {
    input_ = (
      <>
        <input
          type={showPwd ? "text" : "password"}
          name={name}
          className="login-input"
          onChange={onChange}
          placeholder={pName}
          required
        />
        <span className="input-asides link-like" onClick={clickShow}>
          {!showPwd ? "SHOW" : "HIDE"}
        </span>
      </>
    );
  }
  return <div>{input_}</div>;
};

export default Input;
