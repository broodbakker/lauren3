import { FunctionComponent, ReactNode } from 'react';
//components
import Navbar from './/navbar';
import Footer from './footer';

import { Box } from '@chakra-ui/react';

//constants
interface ILayout {
  children: ReactNode;
}

export const Layout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box minH={'80vh'} pt="84px">
        {children}
      </Box>
      <Footer />
    </>
  );
};
