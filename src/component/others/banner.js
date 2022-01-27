import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const arrowButton = css`
  height: 50px;
  color: #fff;
  cursor: pointer;
  background-color: #6b705c;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #a5a58d;
    transform: scale(1.05);
  }
`;
const BannerSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;
const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const BannerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const BannerSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const BannerSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButton}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButton}
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
const Banner = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const autoSlide = () => {
    if (current <= length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  useEffect(() => {
    const id = setInterval(autoSlide, 1500);
    return () => clearInterval(id);
  }, [current]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <BannerSection>
      <BannerWrapper>
        {slides.map((slide, index) => {
          return (
            <BannerSlide key={index}>
              {index === current && (
                <BannerSlider>
                  <BannerImage
                    src={"/assets/" + slide.image}
                    alt={slide.image}
                  />
                </BannerSlider>
              )}
            </BannerSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </BannerWrapper>
    </BannerSection>
  );
};

export default Banner;
