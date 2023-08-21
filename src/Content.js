import React, { useEffect, useState } from "react";
import UserData from "./components/Data/UserData";
import { Main, SSearch, SSearchIcon, Wrapper } from "./tablestyles";
import { AiOutlineSearch } from "react-icons/ai";
import "./Content.css";

const Content = (props) => {
  const [users, setUsers] = useState([]);
  const [bcolor , setBcolor] = useState("white");
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
  const change = () => {
    setBcolor("blue");
  }
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
    <>
    <div className="container">
        <div className="docker" style={{display : "flex",flexDirection : "column",gap: "40px",padding:"15px 0px"}}>
        <button className="connect" onClick={change} style={{background: `${bcolor}`}}>Connect</button>
        <button className="connect" onClick={change} style={{background: `${bcolor}`}}>Connect</button>
        <button className="connect" onClick={change} style={{background: `${bcolor}`}}>Connect</button>
        <button className="connect" onClick={change} style={{background: `${bcolor}`}}>Connect</button>
        <button className="connect" onClick={change} style={{background: `${bcolor}`}}>Connect</button>
        <button className="connect" onClick={change} style={{background: `${bcolor}`}}>Connect</button>
        <button className="connect" onClick={change} style={{background: `${bcolor}`}}>Connect</button>
        <button className="connect" onClick={change} style={{background: `${bcolor}`}}>Connect</button>
        <button className="connect" onClick={change} style={{background: `${bcolor}`}}>Connect</button>
        </div>
        <div className="ran">
        Sample
        </div>
        <div className="details">
        Sample
        </div>
    </div>
    </>
  );
};

export default Content;