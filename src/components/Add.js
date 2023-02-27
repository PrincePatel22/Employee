import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Add({ employees, setEmployees, setIsAdding }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [skills, setSkills] = useState([]);
  const [about, setAbouts] = useState("");

  useEffect(() => {}, []);

  const getSkills = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((e) => e !== value));
    }
  };

  const handleAdd = (e) => {
    if (!firstname || !lastname || !email || !department) {
      return alert("All fields are required");
    }

    const id = employees.length + 1;

    const newEmployee = {
      id,
      firstname,
      lastname,
      email,
      phone,
      gender,
      department,
      skills,
      about,
    };

    const tempemployee = employees;
    tempemployee.push(newEmployee);
    setEmployees(tempemployee);
    setIsAdding(false);
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <h3>Add Employee</h3>
        <br></br>
        <div className="row g-3">
          <div className="col">
            <label htmlFor="firstname">First Name: </label>
            <input
              className="form-control"
              id="firstname"
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="lastname">Last Name: </label>
            <input
              className="form-control"
              id="lastname"
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <br></br>
        <div className="row g-3">
          <div className="col">
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="phone">Phone: </label>
            <input
              id="phone"
              className="form-control"
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
        </div>
        <br></br>
        <div>
          <label htmlFor="gender">Gender: </label>&nbsp;
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <label htmlFor="male" className="px-2">
            Male
          </label>
          &nbsp;
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female" className="px-2">
            Female
          </label>
        </div>
        <br></br>
        <div>
          {" "}
          <label htmlFor="department">Department: </label>
          <select
            id="department"
            class="form-select form-select-sm"
            type="text"
            name="department"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          >
            <option value="PHP">PHP</option>
            <option value=".NET">.Net</option>
            <option value="SEO">SEO</option>
            <option value="Mobile">Mobile</option>
            <option value="Admin/HR">Admin/HR</option>
            <option value="Account">Account</option>
          </select>
        </div>
        <br></br>
        <div>
          <label htmlFor="skills">Skills: </label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="Programming"
            value="Programming"
            onChange={getSkills}
          />
          <label htmlFor="Programming">Programming</label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="Communication"
            value="Communication"
            onChange={getSkills}
          />
          <label htmlFor="Communication">Communication</label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="Finance"
            value="Finance"
            onChange={getSkills}
          />
          <label htmlFor="Finance">Finance</label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="Recruitment"
            value="Recruitment"
            onChange={getSkills}
          />
          <label htmlFor="Recruitment">Recruitment</label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="Optimization"
            value="Optimization"
            onChange={getSkills}
          />
          <label htmlFor="Optimization">Optimization</label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="App Development"
            value="App Development"
            onChange={getSkills}
          />
          <label htmlFor="App Development">App Development</label> &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="Frontend Technology"
            value="Frontend Technology"
            onChange={getSkills}
          />
          <label htmlFor="Frontend Technology">Frontend Technology</label>
          &nbsp;
          <input
            id="skills"
            type="checkbox"
            name="Backend Technology"
            value="Backend Technology"
            onChange={getSkills}
          />
          <label htmlFor="Backend Technology">Backend Technology</label>
        </div>
        <br></br>
        <div className="col-12">
          <label className="form-label" htmlFor="about">
            About:{" "}
          </label>
          <input
            id="about"
            className="form-control"
            type="text"
            name="about"
            value={about}
            onChange={(e) => {
              setAbouts(e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: "30px" }}>
          <input
            type="button"
            className="btn btn-primary"
            value="Add"
            onClick={() => handleAdd()}
          />
          <input
            className="btn btn-danger"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
