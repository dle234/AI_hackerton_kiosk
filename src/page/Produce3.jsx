import React from "react";
import Where from "../component/Where";
import { MainSt } from "./camera";
import P from "../component/P";
import { useLocation, useNavigate } from "react-router-dom";
import { Bottom } from "./Produce1";
import { styled } from "styled-components";
import routes from "../routes";
const Button = styled.button`
  background: rgba(68, 96, 239, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 323px;
  height: 73px;
  color: white;
  line-height: 1.5;
  p {
    &:first-child {
      font-size: 13px;
    }
    &:last-child {
      font-size: 17px;
      font-weight: 600;
    }
  }
`;
const FinalBox = styled.div`
  width: 310px;
  height: 107px;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 8px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const PriceBox = styled.div`
  box-sizing: border-box;

  width: 315px;
  height: 69px;

  background: #ffffff;
  border: 1px solid #eef1f0;
  border-radius: 8px;

  position: relative;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Produce3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productName = location.state?.productName;
  const price = location.state?.price;
  return (
    <MainSt>
      <Where where="2" />
      <P margin="1.5rem 0 1.5rem  0rem" size={true}>
        거의 다 왔어요
        <br />
        장바구니에 잘 담겼는지 확인해주세요
      </P>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "357px",
        }}
      >
        <FinalBox>
          <img
            src={`${process.env.PUBLIC_URL}/image/${productName}2.jpg`}
            alt="coffee"
            style={{ width: "80px", height: "80px" }}
          ></img>
          <div style={{ lineHeight: 1.3 }}>
            <p>{productName}</p>
            <p>1잔</p>
          </div>
        </FinalBox>
        <PriceBox>
          <P>총 {price}원</P>
        </PriceBox>
      </div>

      <Bottom>
        <Button
          onClick={() => {
            navigate(routes.produce4);
          }}
        >
          <p>{price}원 1개</p>
          <p>결제할게요</p>
        </Button>
      </Bottom>
    </MainSt>
  );
};

export default Produce3;
