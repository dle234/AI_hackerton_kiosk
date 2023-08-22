import React from "react";
import { MainSt } from "./camera";
import { useNavigate } from "react-router-dom";
import routes from "../routes";
import styled from "styled-components";
import P from "../component/P";
import { motion } from "framer-motion";

const Loading = () => {
  const navigate = useNavigate();
  setTimeout(() => navigate(routes.selectPack), 3000);
  const Img = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Div = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const variants = {
    hidden: {
      opacity: 0.2,
      y: 15,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };

  return (
    <MainSt>
      <Div>
        <P margin="7rem 0 3rem 0rem">주문 시작하는중...</P>
        <Img>
          <motion.li
            initial="hidden"
            animate="visible"
            variants={variants}
            // custom={i}
          >
            {
              <img
                style={{
                  width: "180px",
                }}
                src={`${process.env.PUBLIC_URL}/image/우주선.jpg`}
              />
            }
          </motion.li>
        </Img>
      </Div>
    </MainSt>
  );
};

export default Loading;
