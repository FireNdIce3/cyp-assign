import React, { useEffect, useState } from "react";
import UserData from "./components/Data/UserData";
import { Main, SSearch, SSearchIcon, Wrapper } from "./tablestyles";

import { AiOutlineSearch } from "react-icons/ai";

const Table = (props) => {
  const [users, setUsers] = useState([]);
  const [q, setQ] = useState("");
  const searchParams = ["name", "email"];

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const search = (data) => {
    return data.filter(
      (item) =>
        searchParams.some((searchParam) =>
          item[searchParam].toLowerCase().includes(q)
        ) || item.address.city.toLowerCase().includes(q)
    );
    //since address had so many other fields thats why i made it seperate to avoid complexity
  };

  useEffect(() => {
    fetchUsers(props.API);
  });
  return (
    <Main>
      <Wrapper>
        <SSearch>
          <SSearchIcon>
            <AiOutlineSearch />
          </SSearchIcon>
          <input
            placeholder="Search..."
            onChange={(e) => {
              setQ(e.target.value);
            }}
          />
        </SSearch>
      </Wrapper>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <UserData users={search(users)} />
          </tbody>
        </table>
      </div>
    </Main>
  );
};

export default Table;
