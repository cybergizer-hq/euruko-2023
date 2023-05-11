import { Flex, Heading, Img, Center } from '@chakra-ui/react';

import eu from './assets/eu.svg';

export const Logo = () => (
  <>
    <Flex
      justifyContent="center"
      mt="190px"
    >
      <Img src={eu} />
    </Flex>
    <Center>
      <Heading
        maxWidth="600px"
        mt="194px"
        mb="235px"
        variant="regularHeading"
        fontSize="43px"
      >
        Join Euruko and make it ruby-doo-bee-doo!
      </Heading>
    </Center>
  </>
);
