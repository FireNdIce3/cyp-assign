import React from "react";
import { Route, Routes } from "react-router-dom";
import Table from "./Table";
import linkArray from "./components/Links/Links";
import Content from "./Content";

const Switch = () => {
  return (
    <Routes>
      {linkArray.map((item) => (
       <Route key={item.to} exact path={item.to} element={<Content API={item.API}/>} />
      ))}
        </Routes>
  );
};

export default Switch;
