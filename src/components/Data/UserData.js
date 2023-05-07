import React, { useEffect, useState } from "react";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, name, email, address } = curUser;
        return (
          <tr key={id}>
            <td >{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address.city}</td>
          </tr>
        );
      })}
    </>
  );
};
export default UserData;
