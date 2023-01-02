import React from "react";
import NavBar from "@components/Header/NavBar";
import FooterEnd from "@components/Footer/FooterEnd";
import Container from "@components/Container/ContainerDesign";
import Head from "next/head";

const LayoutDefault = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <NavBar />
        {children}
        <FooterEnd />
      </Container>
    </>
  );
};

export default LayoutDefault;
