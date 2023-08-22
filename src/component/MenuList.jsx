import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
const MenuSt = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`;
const ImgBtn = styled.div`
  &:hover {
    filter: brightness(85%);
    transition: all ease 0.15s;
  }
`;

const MenuList = ({ menudata }) => {
  const navigate = useNavigate();
  const productPrice = {
    카페라떼: "3500",
    아메리카노: "3000",
    스위트아메리카노: "3300",
    초콜릿: "4000",
  };
  //menudata 는 product 데이터 불러온거
  console.log(menudata);
  return (
    <MenuSt>
      {menudata ? (
        menudata.map((data) => (
          <ImgBtn
            key="1"
            onClick={() => {
              navigate(routes.produce2, {
                state: {
                  productName: data?.productName,
                  price: productPrice[data?.productName],
                },
              });
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/image/${data.productName}.jpg`}
              alt="coffee"
            />{" "}
          </ImgBtn>
        ))
      ) : (
        <p>데이터가 없어용</p>
      )}
    </MenuSt>
  );
};
{
}

export default MenuList;
