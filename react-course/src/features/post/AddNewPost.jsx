import React from "react";
import { useState } from "react";

const initFormValue = {
  title: "",
  body: "",
};
const AddNewPost = ({ addNew }) => {
  const [formInput, setFormInput] = useState(initFormValue);
  const submitHandler = (e) => {
    e.preventDefault();
    addNew(formInput);
    setFormInput(initFormValue);
  };
  const onChangeHandler = (e) => {
    const keyName = e.target.name;
    const value = e.target.value;
    setFormInput((prevState) => {
      return {
        ...prevState,
        [keyName]: value,
      };
    });
  };
  return (
    <form onSubmit={submitHandler} className="container">
      <div className="form-group mb-1">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Title"
          value={formInput.title}
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-group mb-1">
        <textarea
          type="text"
          name="body"
          className="form-control"
          placeholder="Post Body"
          value={formInput.body}
          onChange={onChangeHandler}
        />
      </div>
      <button className="btn btn-primary">Create</button>
    </form>
  );
};

export default AddNewPost;
