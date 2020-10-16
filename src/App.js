import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 2fr auto;
`;
function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
