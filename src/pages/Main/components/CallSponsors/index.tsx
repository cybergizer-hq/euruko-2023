import { Button, Box, Flex, Heading, Img, Text } from '@chakra-ui/react';

import sponsors from './assets/sponsors.svg';

export const CallSponsors = () => (
  <Box
    id="callSponsors"
    backgroundColor="#D9D9D9"
    pb="120px"
  >
    <Flex
      maxW="1520px"
      margin="40px auto 65px auto"
      color="black"
      flexWrap="wrap-reverse"
      justifyContent="center"
    >
      <Flex
        maxWidth="770px"
        flexDirection="column"
        marginTop="120px"
        alignItems="center"
      >
        <Heading
          variant="regularHeading"
          fontSize="120px"
          fontWeight={600}
        >
          CALL FOR <br />
          SPONSORS
        </Heading>
        <Text
          variant="regularText"
          fontSize="38px"
          fontWeight={500}
          mt="60px"
        >
          Ruby is all about community and support. Be a part of it and add a
          true recognition to your brand among the most relevant audience, that
          is ready to listen. Get our sponsorship proposal with a lot of lovely
          stuff and great opportunities for your promo.
        </Text>
      </Flex>
      <Img
        src={sponsors}
        mt="-110px"
        transform="translateX(60px)"
      />
    </Flex>
    <Flex
      maxW="1520px"
      margin="auto"
      alignItems="center"
      backgroundColor="black"
      borderRadius="45px"
      justifyContent="space-around"
      flexWrap="wrap"
    >
      <Text
        variant="regularText"
        fontWeight={600}
        fontSize="56px"
        lineHeight="90%"
        padding="35px 40px"
      >
        Support #1 <br />
        Ruby conference <br />
        in Europe!
      </Text>
      <Button
        padding="60px"
        m="20px 0"
        variant="whiteButton"
      >
        Download proposal
      </Button>
    </Flex>
  </Box>
);
