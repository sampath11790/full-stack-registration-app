import React, { useContext } from "react";
import Usercontext from "../../context/userContext";
const UserListItem = (props) => {
  const ctx = useContext(Usercontext);
  function edithandler(data) {
    console.log();
    props.seteditdata({
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
  }
  async function deletehandler(id) {
    console.log(id);
    let response = await fetch(`http://localhost:4000/user-data/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application.json",
      },
    });
    let data = await response.json();
    ctx.getData();
  }
  return (
    <li key={props.eachdata.id}>
      <span>{props.eachdata.name}</span>---
      <span>{props.eachdata.email}</span>---
      <span>{props.eachdata.phone}</span>
      <button onClick={() => edithandler(props.eachdata)}>Edit</button>
      <button onClick={() => deletehandler(props.eachdata.id)}>Delete</button>
    </li>
  );
};

export default UserListItem;
