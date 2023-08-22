import React from "react";
import styled from "styled-components";
const Pst = styled.p`
  font-size: ${(props) => (props ? "21px" : "24px")};
  font-weight: 500;
  margin: ${(props) => props.margin};
  line-height: 1.5;
`;
const P = ({ children, margin, size }) => {
  return (
    <Pst size={size} margin={margin}>
      {children}
    </Pst>
  );
};

export default P;
