import { Flex, Heading, Img, Center } from '@chakra-ui/react';

import bg_gif from './assets/bg_gif.gif';
import eu from './assets/eu.svg';

export const Logo = () => (
  <>
    <Flex
      justifyContent="center"
      pt="230px"
    >
      <Img src={bg_gif || eu} />
    </Flex>
    <Center>
      <Heading
        maxWidth="600px"
        mt="130px"
        mb="235px"
        variant="regularHeading"
        fontSize="43px"
        p="0 10px"
      >
        Join Euruko and make it ruby-doo-bee-doo!
      </Heading>
    </Center>
  </>
);
