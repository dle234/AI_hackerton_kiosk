import React from "react";
import Back from "./Back";
import styled from "styled-components";
const Where = ({ where }) => {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
  `;
  return (
    <Div>
      {where === "1" ? (
        <>
          <Back />
          <img src={`${process.env.PUBLIC_URL}/image/Group50.jpg`} alt="1" />
        </>
      ) : null}
      {where === "2" ? (
        <>
          <Back />
          <img src={`${process.env.PUBLIC_URL}/image/Group 71.jpg`} alt="2" />
        </>
      ) : null}
    </Div>
  );
};

export default Where;
