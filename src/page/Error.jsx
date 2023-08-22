import React from "react";
import P from "../component/P";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import styled from "styled-components";
import { MainSt } from "./camera";

const Button = styled.button`
  width: 310px;
  height: 45px;
  border: 0;
  border-radius: 0.5rem;
  background-color: rgba(68, 96, 239, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 17px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 8rem 0;
`;
const ImgBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;
const Error = () => {
  const navigate = useNavigate();
  return (
    <MainSt>
      <P margin="5rem 0">
        카메라를 30cm 이상 거리에서<br></br> 정면으로 바라봐주세요.
      </P>
      <ImgBtn>
        <img src={`${process.env.PUBLIC_URL}/image/sad.png`} alt="coffee" />{" "}
      </ImgBtn>
      <Button
        onClick={() => {
          navigate(routes.camera);
        }}
      >
        다시 찍고 주문하기
      </Button>
    </MainSt>
  );
};

export default Error;
