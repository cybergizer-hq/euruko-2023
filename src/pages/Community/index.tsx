import { useEffect } from 'react';

import { Box } from '@chakra-ui/react';

import { Community } from './components/Community';
import { Footer } from '../Main/components/Footer';
import { Nav } from '../Main/components/Nav';

export const Component = () => {
  useEffect(() => {
    if (window.location.hash) {
      const elem = document.getElementById(window.location.hash.slice(1));

      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <Box
      color="white"
      backgroundColor="black"
      textAlign="center"
    >
      <Nav />
      <Community />
      <Footer />
    </Box>
  );
};

Component.displayName = 'JobBoardRoute';
