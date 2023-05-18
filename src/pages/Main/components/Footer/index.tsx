import { Text, Flex, Link, useMediaQuery } from '@chakra-ui/react';

import 'react-slideshow-image/dist/styles.css';

export const Footer = () => {
  const [isLargerThan700] = useMediaQuery('(max-width: 700px)');

  return (
    <footer id="contacts">
      <Flex
        margin="auto"
        maxW="1520px"
        justifyContent="space-around"
        p={isLargerThan700 ? undefined : '100px 0px'}
        // pt={isLargerThan700? undefined :"100px"}
        // pb="90px"
        flexWrap="wrap"
      >
        <Flex
          flexDirection="column"
          alignContent="center"
          minWidth="30%"
          p="20px"
        >
          <Text
            variant="regularText"
            fontSize={isLargerThan700 ? '28px' : '42px'}
            fontWeight={600}
            lineHeight="90%"
          >
            Sponsorship:
          </Text>
          <Link
            fontSize={isLargerThan700 ? '20px' : '30px'}
            fontWeight={500}
            color="#606060"
            textDecoration="underline"
            mt="30px"
            href="mailto:sponsors@euruko.org"
          >
            sponsors@euruko.org
          </Link>
        </Flex>
        <Flex
          flexDirection="column"
          alignContent="center"
          minWidth="30%"
          p="20px"
        >
          <Text
            variant="regularText"
            fontSize={isLargerThan700 ? '28px' : '42px'}
            fontWeight={600}
            lineHeight="90%"
          >
            Collaboration:
          </Text>
          <Link
            fontSize={isLargerThan700 ? '20px' : '30px'}
            fontWeight={500}
            color="#606060"
            textDecoration="underline"
            mt="30px"
            href="mailto:organisers@euruko.org"
          >
            organisers@euruko.org
          </Link>
        </Flex>
        <Flex
          flexDirection="column"
          alignContent="center"
          minWidth="30%"
          p="20px"
        >
          <Text
            variant="regularText"
            fontSize={isLargerThan700 ? '28px' : '42px'}
            fontWeight={600}
            lineHeight="90%"
          >
            Any other question:
          </Text>
          <Link
            textDecoration="underline"
            fontSize={isLargerThan700 ? '20px' : '30px'}
            fontWeight={500}
            color="#606060"
            mt="30px"
            href="mailto:contact@euruko.org"
          >
            contact@euruko.org
          </Link>
        </Flex>
      </Flex>
      <Link
        fontWeight={500}
        fontSize="21px"
        lineHeight="120%"
        href="https://2023.euruko.org/privacy/"
        textDecoration="underline"
      >
        Privacy Policy
      </Link>
      <Text
        variant="regularText"
        fontSize="21px"
        fontWeight={500}
        color="#626262"
        p={isLargerThan700 ? '20px' : '100px'}
      >
        Euruko 2023 <br />
        Vilnius, Lithuania <br />
        21 — 23 of September
      </Text>
    </footer>
  );
};
