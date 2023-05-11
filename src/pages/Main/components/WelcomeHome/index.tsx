import { Text, Box, Flex, Heading, Img } from '@chakra-ui/react';

import logo1 from './assets/logo1.svg';
import logo2 from './assets/logo2.svg';
import logo3 from './assets/logo3.svg';

export const WelcomeHome = () => (
  <Box
    backgroundColor="#D9D9D9"
    pt="20px"
    pb="120px"
  >
    <Flex
      maxW="1520px"
      margin="auto"
      alignItems="center"
      backgroundColor="black"
      borderRadius="80px"
      justifyContent="space-around"
      flexWrap="wrap"
      pb="115px"
    >
      <Heading
        variant="regularHeading"
        fontWeight={600}
        fontSize="120px"
        lineHeight="90%"
        padding="95px"
        letterSpacing="-0.06em"
      >
        Welcome home
        <br /> of Euruko 2023
      </Heading>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
      >
        <Text
          maxW="615px"
          mt="40px"
          variant="regilarText"
          fontSize="31px"
          lineHeight="120%"
        >
          We have prepared additional opportunities for your accomodation in
          Vilnius. Since it is a popular tourist city, you&apos;d better to book
          your hotel beforhand. Here is the list of our recommendations.
        </Text>
        <Flex
          flexWrap="wrap"
          maxW="615px"
          justifyContent="space-evenly"
          alignContent="center"
          gap="20px"
        >
          <Img src={logo1} />
          <Img src={logo2} />
          <Img src={logo3} />
        </Flex>
      </Flex>
    </Flex>
  </Box>
);
