import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    await axios.post("http://localhost:5000/api/auth/signup", form);
    alert("Signup successful");
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg rounded-4" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="card-body p-4">
          <h2 className="text-center mb-4">Create Account</h2>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          <button
            onClick={submit}
            className="btn btn-primary w-100"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
