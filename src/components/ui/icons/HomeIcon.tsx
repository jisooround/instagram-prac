import { SlHome } from "react-icons/sl";

interface HomeIconProps {
  clicked?: "true" | undefined;
}

export default function HomeIcon({ clicked }: HomeIconProps) {
  if (clicked) {
    return <SlHome className="w-5 h-5 bg-pink-100" />;
  } else {
    return <SlHome className="w-5 h-5" />;
  }
}
// 추후 다른 아이콘으로 변경하더라도 여기서만 변경해주면 된다.
