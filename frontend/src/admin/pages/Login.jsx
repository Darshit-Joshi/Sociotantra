import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send credentials to your backend goes here
    console.log("Login attempted with:", data);
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {" "}
              Sociotantra Admin
            </h2>
            <p className="text-gray-600 mt-2"> Sign in Manage the platform</p>
          </div>

          <form onSubmit={handleSubmit}>
            <InputField
              label="Email Address"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="admin@sociotantra.org"
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="********"
            />
            <div className="mt-6">
              <Button text="Sign In" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
