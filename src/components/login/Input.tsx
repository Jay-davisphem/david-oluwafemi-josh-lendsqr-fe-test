import "./login.scss";
import { useState } from "react";
import { InputProps } from "./login.types";
const Input = ({
  type,
  name,
  value,
  onChange,
  onSubmit,
  inset = false,
}: InputProps) => {
  const [showPwd, setShowPwd] = useState(false);

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
          required
        />
        <span className="input-asides" onClick={clickShow}>
          {!showPwd ? "SHOW" : "HIDE"}
        </span>
      </>
    );
  }
  return <div>{input_}</div>;
};

export default Input;
