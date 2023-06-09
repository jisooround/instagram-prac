import { SlHome } from "react-icons/sl";

interface HomeIconProps {
  clicked?: boolean;
}

const HomeIcon = ({ clicked }: HomeIconProps) => {
  return <SlHome className="w-5 h-5 p-2 box-content text-orange-800" />;
};

export default HomeIcon;
// 추후 다른 아이콘으로 변경하더라도 여기서만 변경해주면 된다.
