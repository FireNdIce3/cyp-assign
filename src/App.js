import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";
import { Helmet } from "react-helmet";
import Layout from "./components/Layout/Layout";
import Switch from "./Routes";
export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Sidebar</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <>
          <Layout>
            <Switch />
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
