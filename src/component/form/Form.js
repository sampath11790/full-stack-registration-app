import React, { useState, useEffect, useContext } from "react";
import Usercontext from "../../context/userContext";
import cls from "./FormStyle..module.css";
let url = "http://localhost:4000/user-input";
let initial_data = {
  id: null,
  name: "",
  email: "",
  phone: "",
};
const InputForm = (props) => {
  const ctx = useContext(Usercontext);
  const [data, setdata] = useState(initial_data);

  function addinput(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  async function submitfunction(e) {
    e.preventDefault();

    if (data.id == null) {
      let jsondata = JSON.stringify(data);
      let response = await fetch(url, {
        method: "POST",
        body: jsondata,
        headers: {
          "Content-type": "application/json",
        },
      });
      const mydata = await response.json();
      ctx.getData();
      setdata(initial_data);
      return;
    }

    let jsondata = JSON.stringify(data);
    let response = await fetch(`http://localhost:4000/user-data/${data.id}`, {
      method: "PUT",
      body: jsondata,
      headers: {
        "Content-type": "application/json",
      },
    });
    const mydata = await response.json();
    setdata(initial_data);
    ctx.getData();

    return;
  }

  useEffect(() => {
    setdata(props.editdata);
  }, [props.editdata]);

  return (
    <div className={cls.formcontainer}>
      <h2>Registation Form</h2>
      <form onSubmit={submitfunction} className={cls.frombox}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={addinput}
          value={data.name}
        ></input>
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          name="email"
          onChange={addinput}
          value={data.email}
        ></input>
        <br />
        <label>Phone Number</label>
        <br />
        <input
          type="number"
          name="phone"
          onChange={addinput}
          value={data.phone}
        ></input>
        <br />
        <input type="hidden" name="id" value={data.id}></input>
        <button>submit</button>
        <br />
      </form>
    </div>
  );
};

export default InputForm;
