import { useState } from 'react';

import { Flex, Heading, Img, Center, useMediaQuery } from '@chakra-ui/react';

import bg_gif from './assets/bg_gif.gif';
import eu from './assets/eu.svg';

export const Logo = () => {
  const [isLoaded, setLoaded] = useState(false);
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  const animation = new Image();

  animation.onload = () => {
    setLoaded(true);
  };

  animation.src = bg_gif;

  return (
    <>
      <Flex
        justifyContent="center"
        pt="230px"
      >
        {isLoaded ? (
          <Img src={bg_gif} />
        ) : (
          <Img
            src={eu}
            m="30px"
          />
        )}
      </Flex>
      <Center>
        <Heading
          maxWidth="600px"
          mt={isLargerThan750 ? '55px' : '130px'}
          mb={isLargerThan750 ? '55px' : '235px'}
          variant="regularHeading"
          fontSize="43px"
          p="0 10px"
        >
          Join Euruko and make it ruby-doo-bee-doo!
        </Heading>
      </Center>
    </>
  );
};
