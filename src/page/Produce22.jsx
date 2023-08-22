import React from "react";
import Where from "../component/Where";
import P from "../component/P";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import { MainSt } from "./camera";

const Button2 = styled.button`
  background: rgba(68, 96, 239, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 300px;
  height: 53px;
  color: white;
  font-size: 19px;
  line-height: 1.5;
  /* transform: translateX(-0.2rem); */
  margin-top: 10rem;
`;
const ImgBtn = styled.div`
  &:hover {
    filter: brightness(85%);
    transition: all ease 0.15s;
  }
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
  margin: 0 auto;
`;
const Produce22 = () => {
  const navigate = useNavigate();
  return (
    <MainSt>
      <Where where="3" />

      <P margin="8rem 0 5rem  0rem" size={false}>
        둘 중 하나를 골라주세요
      </P>
      <Div>
        {" "}
        <ImgBtn onClick={() => navigate(routes.produce4)}>
          {" "}
          <img
            src={`${process.env.PUBLIC_URL}/image/Group 1000004190.jpg`}
            alt="coffee"
            style={{ width: "139px", height: "139px" }}
          ></img>
        </ImgBtn>
        <ImgBtn onClick={() => navigate(routes.produce4)}>
          {" "}
          <img
            src={`${process.env.PUBLIC_URL}/image/Group 1000004191.jpg`}
            alt="coffee"
            style={{ width: "139px", height: "139px" }}
          ></img>
        </ImgBtn>
      </Div>
      <Button2 onClick={() => navigate(routes.produce1)}>뒤로 갈래요</Button2>
    </MainSt>
  );
};

export default Produce22;
