import { useState } from 'react';

import { Box, Flex, HStack, Image } from '@chakra-ui/react';

interface IImages {
  images: string[];
}

const ImageSlider = ({ images }: IImages) => {
  const arrowStyles = {
    cursor: 'pointer',
    top: '50%',
    width: 'auto',
    mt: '-22px',
    p: '16px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    _hover: {
      opacity: 0.8,
      bg: 'black',
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = images.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex w="full" {...carouselStyle}>
          {images.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Image
                src={slide}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>

        <Box {...arrowStyles} position="absolute" left="0" onClick={prevSlide}>
          &#10094;
        </Box>
        <Box {...arrowStyles} position="absolute" right="0" onClick={nextSlide}>
          &#10095;
        </Box>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({
            length: slidesCount,
          }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={['7px', null, '15px']}
              m="0 2px"
              bg={currentSlide === slide ? 'blackAlpha.800' : 'blackAlpha.500'}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{
                bg: 'blackAlpha.800',
              }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default ImageSlider;
