import { Flex, Heading, Text } from '@chakra-ui/react';

import background1 from './assets/background1.svg';

export const Speakers = () => (
  <Flex
    maxW="1520px"
    margin="auto"
    flexDirection="column"
    color="#D9D9D9"
  >
    <Flex
      alignItems="center"
      backgroundColor="#2BBA7E"
      borderRadius="45px"
      justifyContent="space-around"
      flexWrap="wrap"
      mt="55px"
      backgroundImage={background1}
      backgroundPosition="right"
      backgroundRepeat="no-repeat"
    >
      <Heading
        variant="regularHeading"
        color="black"
        fontWeight={600}
        fontSize="42px"
        lineHeight="90%"
        letterSpacing="-0.06em"
        padding="51px 35px"
      >
        THE CFP IS OPEN FROM THE 1<sub style={{ fontSize: '14px' }}>ST</sub> OF
        APRIL TO THE 31<sub style={{ fontSize: '14px' }}>ST</sub> OF MAY 2023
      </Heading>
    </Flex>

    <Flex
      border="1px solid #D9D9D9"
      mt="20px"
      borderRadius="80px"
    >
      <Text
        variant="regularText"
        color="#D9D9D9"
        fontWeight={500}
        fontSize="42px"
        lineHeight="120%"
        letterSpacing="-0.02em"
        padding="65px 130px"
      >
        Euruko is being organized for the past 20 years by Ruby developers for
        Ruby developers. It&apos;s a truly volunteer-based event and like Ruby
        it is fostered by the community. Our attendees enjoy its informal
        atmosphere and lots of opportunities to listen, to talk, to hack and to
        have fun.
      </Text>
    </Flex>

    <Flex
      flexDirection="column"
      maxW="1000px"
      m="auto"
      background="radial-gradient(50% 50% at 50% 50%, #2BBA7E -50%, rgba(0, 0, 0, 0) 100%)"
    >
      <Heading
        variant="regularHeading"
        fontWeight={600}
        fontSize="84px"
        lineHeight="90%"
        letterSpacing="-0.06em"
        paddingTop="170px"
      >
        WHAT DO WE WANT TO HEAR FROM YOU
      </Heading>
      <Text
        variant="regularText"
        fontWeight={500}
        fontSize="42px"
        lineHeight="120%"
        letterSpacing="-0.02em"
        padding="60px 20px"
      >
        Euruko attendees — it’s not only Ruby developers, but also Elixirists,
        marketers, frontenders, bloggers with common passion in Ruby, backend,
        community and sharing experience.
      </Text>
    </Flex>
  </Flex>
);
