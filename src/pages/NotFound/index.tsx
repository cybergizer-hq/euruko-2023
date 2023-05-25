import { Box, Button, Heading, useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Footer } from '../Main/components/Footer';
import { Nav } from '../Main/components/Nav';

export const Component = () => {
  const navigate = useNavigate();
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Box
      color="white"
      backgroundColor="black"
      textAlign="center"
    >
      <Nav />
      <Heading
        variant="regularHeading"
        fontSize={isLargerThan750 ? '60px' : '120px'}
        color="white"
        mt="300px"
      >
        404
      </Heading>
      <Button
        m="150px"
        onClick={() => {
          navigate('/');
        }}
        variant="whiteButton"
        padding="40px 60px"
      >
        Go back to Euruko
      </Button>
      <Footer />
    </Box>
  );
};

Component.displayName = 'NotFoundRoute';
