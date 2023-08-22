import React from "react";
import { MainSt } from "./camera";
import { styled } from "styled-components";

const Pp = styled.div`
  font-size: 24px;
  margin: 1.5rem 0 1.5rem 0rem;
  text-align: center;
  line-height: 1.5;
`;

const End = () => {
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
    </MainSt>
  );
};

export default End;
