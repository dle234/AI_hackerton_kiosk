import React from "react";
import { MainSt } from "./camera";
import Back from "../component/Back";
import P from "../component/P";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import routes from "../routes";
import Where from "../component/Where";

const Button = styled.button`
  background: rgba(217, 217, 217, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 150px;
  height: 50px;
  color: #000000;
  line-height: 1.5;
`;
const Button2 = styled.button`
  background: rgba(68, 96, 239, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 150px;
  height: 50px;
  color: #ffffff;
  line-height: 1.5;
`;

const Produce4 = () => {
  const navigate = useNavigate();
  return (
    <MainSt>
      <Where></Where>
      <Back />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        {" "}
        <P margin="1.5rem 0 1.5rem  0rem">왼쪽에 카드를 넣어주세요</P>
        <img src={`${process.env.PUBLIC_URL}/image/손.jpg`} alt="" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "0.8rem",
          position: "absolute",
          bottom: "3rem",
        }}
      >
        <Button>진동벨이 없어요</Button>
        <Button2 onClick={() => navigate(routes.end)}>네. 가져왔어요</Button2>
      </div>
    </MainSt>
  );
};

export default Produce4;
