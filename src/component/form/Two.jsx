import React from "react";
import { MainSt } from "../../page/camera";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import P from "../P";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 311px;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 0rem 0 0rem;
`;
const Two = ({ srcl, srcr, routel, router }) => {
  const navigate = useNavigate();
  return (
    <MainSt>
      {" "}
      <Div2>
        <P margin="4rem 0 4rem 0rem">
          반가워요 <br />
          주문을 시작할게요
          <br />둘 중에 하나를 눌러주세요
        </P>
        <Div>
          <img
            alt="왼"
            style={{
              width: "139px",
              //   margin: "0 2rem 0 0 ",
            }}
            src={srcl}
            onClick={() => navigate(routel)}
          />
          <img
            alt="오"
            style={{
              width: "139px",
            }}
            src={srcr}
            onClick={() => navigate(router)}
          />
        </Div>
      </Div2>
    </MainSt>
  );
};

export default Two;
