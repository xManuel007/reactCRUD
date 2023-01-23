import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const UpdateView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const cancelAction = () => {
    window.history.back();
  }
  return (
    <div>
      <div>
        <form onSubmit={updateUser}>
          <div>
            <label>Name</label>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div>
            <label  >Email</label>
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div  >
            <label  >Gender</label>
            <div  >
              <div>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div  >
            <div  >
              <button type="submit">
                Update
              </button>
              <button type="button" onClick={cancelAction}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateView;