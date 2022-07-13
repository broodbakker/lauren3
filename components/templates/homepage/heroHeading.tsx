import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  IconProps,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { default as NextLink } from 'next/link';
//icons
import { GiHorseshoe, GiPresent } from 'react-icons/gi';
import { HEADER_PHOTO, ROUTES } from '../../../util/constants';

const content = {
  titleFirstPart: 'Hey Allemaal',
  titleSecondPart: 'dit ben ik!',
  headerText:
    'Ik ben Lauren, Wat leuk dat je een bezoekje brengt aan mijn website. Ik knuttsel dagelijks artikelen over fashion, beauty en lifestyle. Heel veel lees- en kijkplezier toegewenst! Kijk eens rond!',
  buttonWinkel: 'Bekijk mijn spulletjes',
  buttonOvermij: 'Iets over mij',
};

export const HeroHeading = () => {
  return (
    <Container maxW={'7xl'} pt="2rem">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Title />
          <Text color={'gray.500'}>{content.headerText}</Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <NextLink href={ROUTES.winkelmand.href}>
              <Button
                as="a"
                cursor="pointer"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'purple'}
                bg={'purple.400'}
                _hover={{ bg: 'purple.500' }}
                leftIcon={<GiPresent height={4} width={4} color={'gray.300'} />}
              >
                {content.buttonWinkel}
              </Button>
            </NextLink>

            <NextLink href={ROUTES.overMij.href}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                leftIcon={
                  <GiHorseshoe height={4} width={4} color={'gray.300'} />
                }
              >
                {content.buttonOvermij}
              </Button>
            </NextLink>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.100', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={HEADER_PHOTO}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

const Title = () => (
  <Heading
    fontWeight={600}
    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
    as="h2"
  >
    <Text as={'span'} position={'relative'}>
      {content.titleFirstPart}{' '}
      <Text as={'span'} color={'purple.400'}>
        {content.titleSecondPart}
      </Text>
      <Box display="inline-block">
        <Image objectFit="cover" src="./icons/waveIcon.svg" alt="waving" />
      </Box>
    </Text>
  </Heading>
);
