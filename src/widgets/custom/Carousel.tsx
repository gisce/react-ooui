import { WidgetProps } from "@/types";
import { Carousel as CarouselOoui, Group as GroupOoui } from "@gisce/ooui";
import { Carousel as AntCarousel, theme } from "antd";
import Container from "@/widgets/containers/Container";
import styled from "styled-components";

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);

type CarouselProps = Omit<WidgetProps, "ooui"> & {
  ooui: CarouselOoui;
  responsiveBehaviour?: boolean;
};

export const Carousel = (props: CarouselProps) => {
  const { ooui, responsiveBehaviour = false } = props;

  return (
    <CustomCarousel autoplay={ooui.autoPlay} dots autoplaySpeed={5000}>
      {ooui.items.map((group: GroupOoui, index: number) => (
        <Container
          key={index}
          container={group.container}
          responsiveBehaviour={responsiveBehaviour}
        />
      ))}
    </CustomCarousel>
  );
};

const CustomCarousel = styled(AntCarousel)`
  .slick-dots li button {
    background-color: ${mapToken.colorPrimary};
  }
  .slick-dots li.slick-active button {
    background-color: ${mapToken.colorPrimary};
  }
  .slick-dots-bottom {
    bottom: -15px;
  }
`;
