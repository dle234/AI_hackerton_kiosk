import React, { useEffect } from "react";
import { useState } from "react";
import { MainSt } from "./camera";
import Where from "../component/Where";
import Back from "../component/Back";
import P from "../component/P";
import MenuList from "../component/MenuList";
import styled from "styled-components";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { setBackend } from "@tensorflow/tfjs";
// import { getProducts } from "../api/api";
import OldMenu from "../component/form/OldMenu";
export const Bottom = styled.div`
  width: 375px;
  height: 116px;

  background: #ffffff;
  box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 10px 0px;

  position: fixed;
  transform: translateX(-2rem);
  bottom: 0;

  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;
//백엔드코드에서 상품 이름 데이터 가져오기
const Button = styled.button`
  background: #a2a2a2;
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
  margin-top: 5rem;
`;
const data = [
  {
    productName: "카페라떼",
    purchaseCount: 1,
  },
  {
    productName: "초콜릿",
    purchaseCount: 2,
  },
  {
    productName: "스위트아메리카노",
    purchaseCount: 3,
  },
  {
    productName: "아메리카노",
    purchaseCount: 4,
  },
];
const Produce1 = () => {
  //   const { data, error, isLoading } = useQuery(["product"], () => {
  //     return getProducts();
  //   });
  const [loading, setLoading] = useState(false);
  const age = localStorage.getItem("age") ? localStorage.getItem("age") : 2030;
  const gender = localStorage.getItem("gender")
    ? localStorage.getItem("gender") == "0"
      ? "남자"
      : "여자"
    : "남자";
  const change = (age) => {
    if (age == 10) return 10;
    else if (age == 2030) return "20~30";
    else if (age == 4050) return "40~50";
  };

  //     if (10 <= age && age < 20) {
  //       return 10;
  //     } else if (20 <= age && age < 30) {
  //       return 20;
  //     } else if (30 <= age && age < 40) {
  //       return 30;
  //     } else if (40 <= age && age < 50) {
  //       return 40;
  //     } else if (50 <= age && age < 60) {
  //       return 50;
  //     } else if (60 <= age && age < 70) {
  //       return 60;
  //     } else {
  //       return 30;
  //     }

  const age2 = change(age);
  const [moreMenu, setMoreMenu] = useState(true);
  const more = () => {
    setMoreMenu(false);
  };
  console.log(age2);
  return (
    <>
      <MainSt>
        {/* {isLoading ? ( */}
        {age2 == "40~50" && moreMenu ? (
          <>
            <Where where="3" />
            <P margin="8rem 0 2.5rem  0rem" size={false}>
              먹고 싶은걸 골라서 눌러주세요
            </P>
            <OldMenu></OldMenu>
            <Button2 onClick={more}>더 많은 메뉴를 볼래요</Button2>
          </>
        ) : (
          <>
            <Where where="1" />
            <P margin="1.5rem 0 1.5rem  0rem" size={true}>
              {` ${age2}대 ${gender} 추천 메뉴에요`}
              <br />
              {`메뉴를 골라서 넣어주세요`}
            </P>
            <MenuList menudata={data} />
            <Bottom>
              <Button>
                <p>
                  {0}원 {0}개
                </p>
                <p>다 골랐어요</p>
              </Button>
            </Bottom>
          </>
        )}
      </MainSt>
    </>
  );
};

export default Produce1;
