import { Button, Flex, Heading, Img, Text } from '@chakra-ui/react';

import difference from './assets/difference.svg';

export const MakeDifference = () => (
  <Flex backgroundColor="#D9D9D9">
    <Flex
      maxW="1520px"
      margin="40px auto 10px auto"
      color="black"
      flexWrap="wrap"
      justifyContent="center"
    >
      <Img src={difference} />
      <Flex
        maxWidth="770px"
        flexDirection="column"
        margin="60px"
        alignItems="center"
      >
        <Heading
          variant="regularHeading"
          fontSize="120px"
          fontWeight={600}
        >
          Make a <br />
          difference!
        </Heading>
        <Text
          variant="regularText"
          fontSize="38px"
          fontWeight={500}
          mt="60px"
        >
          Join our program committee and help us to shape the Euruko&apos;s
          agenda. Contact us with a short bio and be the one who defines what is
          hot and what is not.
        </Text>
        <Button
          mt="60px"
          variant="linkButton"
        >
          organizers@euruko.org
        </Button>
      </Flex>
    </Flex>
  </Flex>
);
