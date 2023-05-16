import React from "react";
import { ConversorContextProvider } from "./context/conversor";
import MainPage from "./pages";
import GlobalStyle from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <ConversorContextProvider>
        <MainPage />
      </ConversorContextProvider>
    </>
  );
}

export default App;
