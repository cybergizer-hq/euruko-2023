import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react';

import tower from './assets/tower.svg';

export const Celebration = () => (
  <Box
    maxW="1520px"
    margin="auto"
  >
    <Box
      border="1px solid #D9D9D9"
      borderRadius="45px"
      mt="20px"
      width="100%"
      zIndex={12}
      position="relative"
    >
      <Heading
        variant="regularHeading"
        fontSize="42px"
        maxW="300px"
        m="75px auto 60px auto"
      >
        Triple celebration
      </Heading>
      <Flex
        justifyContent="space-around"
        _before={{
          content: `''`,
          display: 'block',
          width: '235px',
          height: '1px',
          backgroundColor: '#D9D9D9',
          position: 'absolute',
          marginTop: '70px',
          marginRight: '500px'
        }}
        _after={{
          content: `''`,
          display: 'block',
          width: '235px',
          height: '1px',
          backgroundColor: '#D9D9D9',
          position: 'absolute',
          marginTop: '70px',
          marginLeft: '500px'
        }}
      >
        <Box maxW="250px">
          <Text
            fontSize="84px"
            fontWeight={600}
            lineHeight="70%"
            letterSpacing="-0.06em"
          >
            20 years
          </Text>
          <Text
            mt="10px"
            variant="regularText"
            fontSize="21px"
          >
            of Euruko
          </Text>
        </Box>
        <Box maxW="250px">
          <Text
            fontSize="84px"
            fontWeight={600}
            lineHeight="70%"
            letterSpacing="-0.06em"
          >
            30 years
          </Text>
          <Text
            mt="10px"
            variant="regularText"
            fontSize="21px"
          >
            of Ruby
          </Text>
        </Box>
        <Box maxW="250px">
          <Text
            fontSize="84px"
            fontWeight={600}
            lineHeight="70%"
            letterSpacing="-0.06em"
          >
            700 years
          </Text>
          <Text
            mt="10px"
            variant="regularText"
            fontSize="21px"
          >
            of Vilnius
          </Text>
        </Box>
      </Flex>
      <Text
        variant="regularText"
        fontSize="42px"
        m="auto"
        mt="55px"
        mb="75px"
        maxW="550px"
        letterSpacing="-0.04em"
        fontWeight={500}
        lineHeight="90%"
      >
        We definitely have something to celebrate!
      </Text>
    </Box>
    <Flex
      alignItems="center"
      flexDirection="column"
      pt="110px"
      pb="110px"
    >
      <Heading
        variant="regularHeading"
        fontSize="84px"
        fontWeight={600}
        zIndex={11}
      >
        Vilnius
      </Heading>
      <Heading
        variant="regularHeading"
        fontSize="84px"
        fontWeight={600}
        zIndex={9}
        mt="-10px"
      >
        Lithuania
      </Heading>
      <Img
        src={tower}
        position="absolute"
        transform="translateY(-285px)"
        zIndex={10}
      />
      <Heading
        mt="265px"
        variant="regularHeading"
        fontSize="84px"
        fontWeight={600}
      >
        21 — 23
      </Heading>
      <Heading
        variant="regularHeading"
        fontSize="84px"
        fontWeight={600}
      >
        September
      </Heading>
    </Flex>
  </Box>
);
