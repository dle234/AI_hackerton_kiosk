import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";
const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
  margin: 0 auto;
`;
const ImgBtn = styled.div`
  &:hover {
    filter: brightness(85%);
    transition: all ease 0.15s;
  }
`;

const OldMenu = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <ImgBtn
        onClick={() => {
          navigate(routes.produce22);
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/image/Group 51.jpg`}
          alt="coffee"
          style={{ width: "139px", height: "139px" }}
        ></img>
      </ImgBtn>
      <ImgBtn onClick={() => navigate(routes.produce22)}>
        {" "}
        <img
          src={`${process.env.PUBLIC_URL}/image/Group 1000004187.jpg`}
          alt="coffee"
          style={{ width: "139px", height: "139px" }}
        ></img>
      </ImgBtn>
      <ImgBtn onClick={() => navigate(routes.produce22)}>
        {" "}
        <img
          src={`${process.env.PUBLIC_URL}/image/Group 1000004188.jpg`}
          alt="coffee"
          style={{ width: "139px", height: "139px" }}
        ></img>
      </ImgBtn>
      <ImgBtn onClick={() => navigate(routes.produce22)}>
        <img
          src={`${process.env.PUBLIC_URL}/image/Group 1000004189.jpg`}
          alt="coffee"
          style={{ width: "139px", height: "139px" }}
        ></img>
      </ImgBtn>
    </Div>
  );
};

export default OldMenu;
