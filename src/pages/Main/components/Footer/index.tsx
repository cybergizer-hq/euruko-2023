import { Text, Flex, Link } from '@chakra-ui/react';

import 'react-slideshow-image/dist/styles.css';

export const Footer = () => (
  <footer>
    <Flex
      margin="auto"
      maxW="1520px"
      justifyContent="space-around"
      pt="120px"
      pb="90px"
    >
      <Flex
        flexDirection="column"
        alignContent="center"
      >
        <Text
          variant="regularText"
          fontSize="42px"
          fontWeight={600}
          lineHeight="90%"
        >
          Sponsorship:
        </Text>
        <Text
          variant="regularText"
          fontSize="30px"
          fontWeight={500}
          color="#606060"
          mt="30px"
        >
          sponsors@euruko.org
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        alignContent="center"
      >
        <Text
          variant="regularText"
          fontSize="42px"
          fontWeight={600}
          lineHeight="90%"
        >
          Collaboration:
        </Text>
        <Text
          variant="regularText"
          fontSize="30px"
          fontWeight={500}
          color="#606060"
          mt="30px"
        >
          organisers@euruko.org
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        alignContent="center"
      >
        <Text
          variant="regularText"
          fontSize="42px"
          fontWeight={600}
          lineHeight="90%"
        >
          Any other question:
        </Text>
        <Text
          variant="regularText"
          fontSize="30px"
          fontWeight={500}
          color="#606060"
          mt="30px"
        >
          contact@euruko.org
        </Text>
      </Flex>
    </Flex>
    <Link
      fontWeight={500}
      fontSize="21px"
      lineHeight="120%"
      href="#"
      textDecoration="underline"
    >
      Privacy Policy
    </Link>
    <Text
      variant="regularText"
      fontSize="21px"
      fontWeight={500}
      color="#626262"
      p="100px"
    >
      Euruko 2023 <br />
      Vilnius, Lithuania <br />
      21 — 23 of September
    </Text>
  </footer>
);
