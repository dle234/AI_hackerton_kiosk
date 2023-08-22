import React from "react";
import Two from "../component/form/Two";
import routes from "../routes";

const SelectPack = () => {
  return (
    <div>
      <Two
        srcl={`${process.env.PUBLIC_URL}/image/먹고가요.jpg`}
        srcr={`${process.env.PUBLIC_URL}/image/주문하기.jpg`}
        routel={routes.produce1}
        router={routes.produce1}
      ></Two>
    </div>
  );
};

export default SelectPack;
