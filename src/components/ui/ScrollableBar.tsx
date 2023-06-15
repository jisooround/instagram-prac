import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 1200 },
    items: 8,
  },
  laptop: {
    breakpoint: { max: 1200, min: 900 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 900, min: 576 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 3,
  },
};

export default function ScrollableBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Carousel containerClass="w-full flex" responsive={responsive}>
      {children}
    </Carousel>
  );
}
