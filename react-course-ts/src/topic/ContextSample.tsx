import React, { ChangeEvent, FormEvent, useState } from "react";
import Child1 from "./Child1";

const ContextSample = () => {
  const [userName, setUserName] = useState("");
  const [formVal, setFormVal] = useState({} as IFormVal);
  const changeHandler = (e: ChangeEvent) => {
    setUserName((e.target as HTMLInputElement).value);
  };
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setFormVal({
      username: userName,
    });
  };
  return (
    <>
      <h2>Context Sample</h2>
      <form className="mx-3" onSubmit={(e: FormEvent) => submitHandler(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={userName}
            onChange={(event: ChangeEvent) => {
              changeHandler(event);
            }}
          />
        </div>
        <button className="btn btn-primary my-2">Submit</button>
      </form>
      <Child1 formVal={formVal} />
    </>
  );
};

export default ContextSample;

export interface IFormVal {
  username: string;
}
