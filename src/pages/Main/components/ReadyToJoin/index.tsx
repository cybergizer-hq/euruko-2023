import { Button, Box, Flex, Heading } from '@chakra-ui/react';

export const ReadyToJoin = () => (
  <Box
    backgroundColor="#D9D9D9"
    padding="120px 0px 60px 0px"
  >
    <Flex
      maxW="1520px"
      margin="auto"
      alignItems="center"
      backgroundColor="black"
      borderRadius="45px"
      justifyContent="space-around"
      flexWrap="wrap"
    >
      <Heading
        variant="regularHeading"
        fontWeight={600}
        fontSize="120px"
        lineHeight="90%"
        padding="80px"
        letterSpacing="-0.02em"
      >
        Ready to <br />
        join?
      </Heading>
      <Button
        padding="60px"
        m="20px"
        variant="whiteButton"
      >
        Buy your ticket
      </Button>
    </Flex>
  </Box>
);
