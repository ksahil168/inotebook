// Importing React and useState hook from react
import React, { useState } from "react";
// Importing useNavigate hook from react-router-dom for navigation
import { useNavigate } from "react-router-dom";

// Defining a functional component Signup
const Signup = () => {
  // Using useState hook to manage form data
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  // Using useNavigate hook for navigation
  const navigate = useNavigate();
  // Defining an async function to handle form submission
  const handleSubmit = async (e) => {
    // Preventing default form submission
    e.preventDefault();
    // Destructuring name, email, password from credentials
    const { name, email, password } = credentials;
    // Making a POST request to the server to create a new user
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    // Parsing the response to JSON
    const json = await response.json();
    // Logging the response to the console
    console.log(json);

    // Saving the auth token to local storage and redirecting to home page
    localStorage.setItem("token", json.authtoken);
    navigate("/");
  };

  // Defining a function to handle form input changes
  const onChange = (e) => {
    // Updating the credentials state with the new input value
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Returning the JSX for the Signup form
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="Password"
            name="password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cPassword"
            name="cpassword"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

// Exporting the Signup component as default
export default Signup;
