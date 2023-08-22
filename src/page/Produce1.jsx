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
export const Bottom = styled.div`
  width: 375px;
  height: 116px;

  background: #ffffff;
  box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 10px 0px;

  position: fixed;
  left: 0;
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
  const [old, setOld] = useState(null);
  const [gen, setGen] = useState(null);
  const [loading, setLoading] = useState(false);
  const age = localStorage.getItem(0);
  const gender = localStorage.getItem(1)[0] == "m" ? "남자" : "여자";

  useEffect(() => {
    setGen(gender);
    if (10 <= age < 20) {
      setOld(10);
    } else if (20 <= age < 30) {
      setOld(20);
    } else if (30 <= age < 40) {
      setOld(30);
    } else if (40 <= age < 50) {
      setOld(40);
    } else if (50 <= age < 60) {
      setOld(50);
    } else {
      setOld(60);
    }
  }, [age, gender]);
  //console.log(age, old);

  return (
    <>
      <MainSt>
        {/* {isLoading ? ( */}
        {loading ? (
          <div>로딩중...</div>
        ) : (
          <>
            <Where where="1" />
            <P margin="1.5rem 0 1.5rem  0rem" size={true}>
              {` ${age}대 ${gender} 추천 메뉴에요`}
              <br />
              {`메뉴를 골라서 넣어주세요`}
            </P>
            <MenuList menudata={data} />
          </>
        )}
        <Bottom>
          <Button>
            <p>
              {0}원 {0}개
            </p>
            <p>다 골랐어요</p>
          </Button>
        </Bottom>
      </MainSt>
    </>
  );
};

export default Produce1;
