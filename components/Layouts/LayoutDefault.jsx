import React from "react";
import NavBar from "@components/Header/NavBar";
import FooterEnd from "@components/Footer/FooterEnd";
import Container from "@components/Container/ContainerDesign";

const LayoutDefault = ({ children }) => {
  return (
    <>
      <Container>
        <NavBar />
        {children}
        <FooterEnd />
      </Container>
    </>
  );
};

export default LayoutDefault;
