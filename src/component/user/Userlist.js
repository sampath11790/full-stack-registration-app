import React, { useContext, useEffect, useState } from "react";
import InputForm from "../form/Form";
import UserListItem from "./Userlistitem";
import Usercontext from "../../context/userContext";
import cls from "./List.module.css";
let url = "http://localhost:4000/user-data";
const UserList = () => {
  const ctx = useContext(Usercontext);

  const [editdata, seteditdata] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    ctx.getData();
  }, []);
  return (
    <div className={cls.userlistContainer}>
      <InputForm editdata={editdata}></InputForm>
      <ul className={cls.ulcontainer}>
        {ctx.data.map((each) => (
          <UserListItem
            key={each.id}
            eachdata={each}
            seteditdata={seteditdata}
          ></UserListItem>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
