import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import { IMAGES_OF_MYSELF, ROUTES } from '../../../util/constants';

export default function HoeIkDingenMaak() {
  return (
    <Stack minH={'50vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'} bg="purple.50">
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'purple.400',
                zIndex: -1,
              }}
            >
              Hoe ik
            </Text>
            <br />{' '}
            <Text color={'purple.400'} as={'span'}>
              dingen maak
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Dit is mijn kamer waar ik alles in elkaar zet
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href={ROUTES.winkelmand.href}>
              <a>
                <Button
                  rounded={'full'}
                  bg={'purple.400'}
                  color={'white'}
                  _hover={{
                    bg: 'purple.500',
                  }}
                >
                  wat ik allemaal verkoop
                </Button>
              </a>
            </Link>

            <Link href={ROUTES.winkelmand.href}>
              <a>
                <Button rounded={'full'}>Hoe ik het maak</Button>
              </a>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Carousel />
      </Flex>
    </Stack>
  );
}

const Carousel = () => {
  const slides = IMAGES_OF_MYSELF.map((image) => ({ img: image }));
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = 'right';
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === 'left' ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);
  return (
    <Flex
      w="full"
      h="full"
      bg="#edf3f8"
      _dark={{
        bg: '#3e3e3e',
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden">
        <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
