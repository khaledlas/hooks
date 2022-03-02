import React, { useReducer } from "react";
export default function BasicForm() {
  const initForm = {
    name: "",
    email: "",
    password: "",
  };
  const [formVal, dispatch] = useReducer(
    (curVal, newVal) => ({ ...curVal, ...newVal }),
    initForm
  );
  const { name, email, password } = formVal;
  const onValChange = (event) => {
    const { name, value } = event.target;
    dispatch({ [name]: value });
    console.log(formVal);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formVal);
  };
  return (
    <div>
      <form onSubmit={onSubmit} noValidate>
        <div className="form-group mb-2">
          <label className="mb-2">
            <strong>Name</strong>
          </label>
          <input
            required
            type="text"
            name="name"
            value={name}
            className="form-control"
            onChange={onValChange}
          />
        </div>
        <div className="form-group mb-2">
          <label className="mb-2">
            <strong>Email</strong>
          </label>
          <input
            type="text"
            name="email"
            value={email}
            className="form-control"
            onChange={onValChange}
          />
        </div>
        <div className="form-group mb-2">
          <label className="mb-2">
            <strong>Password</strong>
          </label>
          <input
            type="text"
            name="password"
            value={password}
            className="form-control"
            onChange={onValChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
