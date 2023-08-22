import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MainSt } from "./camera";
import Where from "../component/Where";
import MenuList from "../component/MenuList";
import { Bottom } from "./Produce1";
import P from "../component/P";
import { styled } from "styled-components";
import routes from "../routes";

const Button = styled.button`
  background: ${(props) =>
    props.background ? "rgba(68, 96, 239, 1)" : "#a2a2a2"};
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
const Box = styled.div`
  box-sizing: border-box;

  width: 350px;
  height: 360px;

  /* gray07 */
  background: #ffffff;
  /* gray06 */
  border: 1px solid #eef1f0;
  border-radius: 8px;

  /* position: absolute;
  z-index: 100; */
  transform: translateX(-1.3rem);

  padding: 0 1rem;
`;

const Btn = styled.button`
  font-size: 17px;

  box-sizing: border-box;

  width: 149px;
  height: 60.56px;

  /* gray07 */
  background: ${(props) =>
    props.background == "active" ? "#d7d7d7" : "#ffffff"};
  /* gray06 */
  border: 1px solid #eef1f0;
  border-radius: 8px;

  &:hover {
    background: #d7d7d7;
    transition: all ease 0.15s;
  }
`;
const Btn2 = styled.button`
  background: ${(props) =>
    props.background == "active" ? "#d7d7d7" : "#ffffff"};
  font-size: 17px;

  box-sizing: border-box;

  width: 92px;
  height: 48.84px;
  margin-bottom: 0.3rem;

  border: 1px solid #eef1f0;
  border-radius: 8px;
  &:hover {
    background: #d7d7d7;
    transition: all ease 0.15s;
  }
`;

const EndBtn = styled.button`
  font-size: 17px;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));

  box-sizing: border-box;

  width: 305px;
  height: 42.98px;
  margin: 0.3rem 0;

  border: 1px solid #eef1f0;
  border-radius: 8px;
  &:hover {
    background: #d7d7d7;
    transition: all ease 0.15s;
  }
`;

const Imgdiv = styled.div`
  display: flex;
  height: 72px;
  margin: 0.5rem 0;
  justify-content: space-evenly;
  align-items: center;
  size: 15px;
  color: rgba(87, 92, 89, 1);
`;
const HotCold = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`;
const Sweet = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
`;

const Produce2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productName = location.state.productName;
  const price = location.state.price;
  //라디오버튼기능!!
  const [activeBtn, setActiveBtn] = useState(null);
  const [sweetActiveBtn, setSweetActiveBtn] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveBtn(buttonId == activeBtn ? null : buttonId);
  };
  const handleButtonClick2 = (buttonId) => {
    console.log(buttonId);
    setSweetActiveBtn(buttonId == sweetActiveBtn ? null : buttonId);
  };

  return (
    <>
      <MainSt>
        <>
          <Where where="1" />
          <P margin="1.5rem 0 1.5rem  0rem" size={true}>
            메뉴를 골라서 누르고
            <br />다 골랐으면 아래 버튼을 눌러주세요
          </P>
        </>

        <Box>
          <Imgdiv>
            <img
              src={`${process.env.PUBLIC_URL}/image/${productName}2.jpg`}
              alt="coffee"
              style={{ width: "80px" }}
            ></img>
            <p style={{ lineHeight: "1.5" }}>
              {productName}를 골랐어요
              <br />
              상세 설정을 골라주세요
            </p>
          </Imgdiv>

          <HotCold>
            <Btn
              key="1"
              background={`${1 === activeBtn ? "active" : ""}`}
              onClick={() => handleButtonClick(1)}
            >
              차갑게
            </Btn>
            <Btn
              key="2"
              background={`${2 === activeBtn ? "active" : ""}`}
              onClick={() => handleButtonClick(2)}
            >
              따뜻하게
            </Btn>
          </HotCold>
          <p style={{ fontSize: "17px", margin: "0.5rem 0" }}>당도</p>
          <Sweet>
            <Btn2
              key="3"
              background={`${3 === sweetActiveBtn ? "active" : ""}`}
              onClick={() => handleButtonClick2(3)}
            >
              0%
            </Btn2>
            <Btn2
              key="4"
              background={`${4 === sweetActiveBtn ? "active" : ""}`}
              onClick={() => handleButtonClick2(4)}
            >
              30%
            </Btn2>
            <Btn2
              key="5"
              background={`${5 === sweetActiveBtn ? "active" : ""}`}
              onClick={() => handleButtonClick2(5)}
            >
              50%
            </Btn2>
          </Sweet>
          <EndBtn
            onClick={
              activeBtn && sweetActiveBtn
                ? () => {
                    navigate(routes.produce3, {
                      state: {
                        productName: productName,
                        price: price,
                      },
                    });
                  }
                : null
            }
          >
            추천 설정으로 할게요
          </EndBtn>
          <EndBtn
            onClick={
              activeBtn && sweetActiveBtn
                ? () => {
                    navigate(routes.produce3, {
                      state: {
                        productName: productName,
                        price: price,
                      },
                    });
                  }
                : null
            }
          >
            다 골랐어요
          </EndBtn>
        </Box>

        <Bottom>
          <Button
            background={activeBtn && sweetActiveBtn ? true : null}
            onClick={
              activeBtn && sweetActiveBtn
                ? () => {
                    navigate(routes.produce3, {
                      state: {
                        productName: productName,
                        price: price,
                      },
                    });
                  }
                : null
            }
          >
            <p>{price}원 1개</p>
            <p>다 골랐어요</p>
          </Button>
        </Bottom>
      </MainSt>
    </>
  );
};

export default Produce2;
