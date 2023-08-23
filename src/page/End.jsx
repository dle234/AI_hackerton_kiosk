import React from "react";
import { MainSt } from "./camera";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../routes";

const Pp = styled.div`
  font-size: 24px;
  margin: 1.5rem 0 1.5rem 0rem;
  text-align: center;
  line-height: 1.5;
`;
const Btn = styled.button`
  background: rgba(68, 96, 239, 1);
  font-size: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 323px;
  height: 73px;
  color: white;
  position: relative;
  bottom: 10rem;
`;

const End = () => {
  const navigate = useNavigate();
  return (
    <MainSt>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "640px",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/image/icon-park-solid_check-one.jpg`}
        ></img>
        <Pp>
          주문 끝!
          <br />
          메뉴가 나오면 알려드릴게요
        </Pp>
      </div>
      <Btn
        onClick={() => {
          navigate(routes.camera);
        }}
      >
        처음으로 가기
      </Btn>
    </MainSt>
  );
};

export default End;
