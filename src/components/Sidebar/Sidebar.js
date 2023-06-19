import React, { useContext, useRef, useState } from "react";
import {
  SSearch,
  SSidebar,
  SLogo,
  SSearchIcon,
  SDivider,
  SLinkContainer,
  SLink,
  SLinkIcon,
  SLinkLabel,
  STheme,
  SThemeLabel,
  SToggleThumb,
  SThemeToggler,
  SSidebarButton,
} from "./styles";
import { logoSVG } from "../../assets";
import {
  AiOutlineLogout,
  AiOutlineLeft,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { ThemeContext } from "./../../App.js";
import { useLocation } from "react-router-dom";
import linkArray from "../Links/Links";

const Sidebar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const searchRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const [a, setA] = useState("");
  const buttonClicked = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    }
    else{
      addTab(a)
    }
  };
  const addTab = (a) => {
    if (sidebarOpen && a !== "") {
      linkArray.push({
        label: a,
        icon: <AiOutlinePlusCircle />,
        to: "/" + a + linkArray.length,
        API: "sampleAPI",
      });
      setA("");
      //adding a table
    }
  };
  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img
          src={logoSVG}
          title="i know exactly where you aree"
          alt="i know exactly where you aree"
        />
      </SLogo>
      <SSearch
        
        style={!sidebarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon onClick={buttonClicked}>
          <AiOutlinePlusCircle />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Create New Tab"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
          className="input"
          value={a}
          onChange={(e) => setA(e.target.value)}
          
        />
      </SSearch>
      <SDivider />

      {linkArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label} isActive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({ icon, label }) => (
        <SLinkContainer key={label}>
          <SLink style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

const secondaryLinksArray = [{ label: "Logout", icon: <AiOutlineLogout /> }];
export default Sidebar;
