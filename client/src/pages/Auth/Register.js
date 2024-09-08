import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import  toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [FirstName, SetName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [email, Setemail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/register',
        { FirstName, LastName, email, Password }
      );
      if (res && res.data.message) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };
 
  
  return (
    <Layout title="Register -Ecommerce App">
      <div className="form-container">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              value={FirstName}
              onChange={(e) => SetName(e.target.value)}
              className="form-control"
              id="inputFirstNAme"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputLastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              value={LastName}
              onChange={(e) => SetLastName(e.target.value)}
              className="form-control"
              id="inputLastNAme"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => Setemail(e.target.value)}
              className="form-control"
              id="inputEmail4"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="inputPassword4"
              required
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
