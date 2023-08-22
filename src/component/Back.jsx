import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { LiaUndoAltSolid } from "react-icons/lia";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Camera from "../page/camera";
import routes from "../routes";
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 0.3rem 0;
  font-size: 0.8rem;
`;

const Back = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        {<AiOutlineLeft />}
        뒤로가기
      </div>
      <div
        onClick={() => {
          navigate(routes.camera);
        }}
      >
        {<LiaUndoAltSolid />}
        처음으로
      </div>
    </Div>
  );
};

export default Back;
