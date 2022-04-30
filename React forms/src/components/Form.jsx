import { useRef, useState } from "react";
import  ShowData  from "./showData";


const Form = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Age: "",
    Address: "",
    Department: "",
    Salary: "",
    Marital: false,
  });
  const [user, setuser] = useState(formData);

  const submitData = async (event) => {
    try {
      event.preventDefault();
      let res = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      let data = await res.json();
      for (let s in data) {
        user[s] = data[s];
        setuser({ ...user, [user[s]]: data[s] });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
   
    if (e.target.id == "Marital") {
      setFormData({
        ...formData,
        Marital: true,
      });
    }

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div id="mainDiv">
      <div id="formDiv">
        <h1>Employee details</h1>
        <form onSubmit={submitData}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter your name"
            id="Name"
          />
          <input
            type="number"
            onChange={handleChange}
            name=""
            placeholder="Enter your age"
            id="Age"
          />
          <textarea
            name=""
            id="Address"
            onChange={handleChange}
            placeholder="Enter your address"
            cols="20"
            rows="5"
          ></textarea>
          <select name="" onChange={handleChange} id="Department">
            <option value="">select Department</option>
            <option value="Mangement">Mangement</option>
            <option value="Staff">Staff</option>
            <option value="Students">Students</option>
            <option value="HR">HR</option>
          </select>
          <input
            type="number"
            onChange={handleChange}
            placeholder="Enter your salary"
            name=""
            id="Salary"
          />
          <div>
            <input
              type="checkbox"
              onChange={handleChange}
              name=""
              id="Marital"
            />
            <span>Married</span>
          </div>
          <div>
            <input
              type="checkbox"
              onChange={handleChange}
              name=""
              id="Marital"
            />
            <span>Un-Married</span>
          </div>
          <input type="submit" id="button" value="Submit" />
        </form>
      </div>
      <div id="tableDiv">
        <ShowData user={user} />
      </div>
    </div>
  );
};
    



export default Form