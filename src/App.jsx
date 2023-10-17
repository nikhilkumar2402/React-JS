import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import ThemeBtn from "./Components/ThemeBtn";

const App = () => {
  const [themeMode, setThemeMode] = useState('light')
  const lightMode = () =>{
    setThemeMode('light')
  }
  const darkMode = () =>{
    setThemeMode('dark')
  }

  useEffect(()=>{
    let htmlContent = document.querySelector('html')
    htmlContent.classList.remove('light', 'dark')
    htmlContent.classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
