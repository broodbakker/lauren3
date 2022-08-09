import {
  Box,
  chakra,
  Container,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react';
import { default as NextLink } from 'next/link';
import { ReactNode } from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
//constants
import { ROUTES } from '../../util/constants';
//constants
import { LOGO_SITE } from '../../util/constants';



const NAV_ITEMS = [ROUTES.home, ROUTES.winkelmand, ROUTES.overMij];

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('pink.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <SiteLogo />
        <Stack direction={'row'} spacing={6}>
          {NAV_ITEMS.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.label}
            </Link>
          ))}
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 Ampolo Design All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'FaTiktok'} href={'#'}>
              <FaTiktok />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

const SiteLogo = () => {
  return (
    <NextLink href="/">
      <a>
        <Image
          borderRadius="full"
          boxSize="60px"
          src={LOGO_SITE}
          alt="lauren schleich"
        />
      </a>
    </NextLink>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
