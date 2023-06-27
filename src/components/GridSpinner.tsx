import dynamic from "next/dynamic";
import React from "react";

const GridLoader = dynamic(
  () => import("react-spinners").then((lib) => lib.GridLoader),
  {
    ssr: false,
  },
);
// lazy하게 로딩하게 하는 코드
// 서버에서 미리 랜더링 하지 않게 함

type Props = {
  color?: string;
};

const GridSpinner = ({ color = "orange" }: Props) => {
  return <GridLoader color={color} />;
};

export default GridSpinner;
