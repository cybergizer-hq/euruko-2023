import {
  Flex,
  Heading,
  Text,
  Img,
  Box,
  Divider,
  Center,
  Link,
  Button
} from '@chakra-ui/react';

import arrow from './assets/arrow.svg';
import background1 from './assets/background1.svg';
import background2 from './assets/background2.svg';

const interests = [
  'RUBY ON RAILS',
  'RSPEC',
  'RUBYGEMS',
  'WEB APPLICATION SECURITY',
  'HOW TO CONTRIBUTE TO OSS',
  'MENTORING',
  'DEBUGGERS CONTINUOUS INTEGRATION',
  'INTEGRATION TESTING',
  'DEVOPS',
  'DEPLOYMENT TOOLING',
  'MEET-UP ORGANISING',
  'PROMOTING DIVERSITY'
];

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
      mt="160px"
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

    <Flex>
      <Img src={arrow} />
      <Heading
        variant="regularHeading"
        fontWeight={600}
        fontSize="84px"
        lineHeight="90%"
        letterSpacing="-0.06em"
        paddingTop="90px"
      >
        HERE ARE TOP-LIST OF INTERESTS OF EURUKO’22 ATTENDEES
      </Heading>
      <Img src={arrow} />
    </Flex>
    <Flex
      p="90px 0"
      justifyContent="center"
      flexWrap="wrap"
    >
      {interests.map((interest) => (
        <Box
          backgroundColor="#2BBA7E"
          borderRadius="92px"
          m="2px 14px"
          width="max-content"
        >
          <Text
            variant="regularText"
            fontSize="56px"
            fontWeight={600}
            color="black"
            padding="15px 30px"
            textTransform="lowercase"
          >
            {interest}
          </Text>
        </Box>
      ))}
    </Flex>
    <Flex justifyContent="center">
      <Text
        variant="regularText"
        fontSize="21px"
        fontWeight={500}
        color="#9A9A9A"
        width="370px"
      >
        Talks should be delivered in english.
      </Text>
      <Center height="60px">
        <Divider orientation="vertical" />
      </Center>
      <Text
        variant="regularText"
        fontSize="21px"
        fontWeight={500}
        color="#9A9A9A"
        width="490px"
      >
        Talks are expected to be 30 minutes long, not including a short Q&A
        section after the talk.
      </Text>
      <Center height="60px">
        <Divider orientation="vertical" />
      </Center>
      <Text
        variant="regularText"
        fontSize="21px"
        fontWeight={500}
        color="#9A9A9A"
        width="370px"
      >
        The questions in the Q&A section are screened and moderated.
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
        paddingTop="150px"
      >
        IF YOUR TALK IS SELECTED
      </Heading>
      <Text
        variant="regularText"
        fontWeight={500}
        fontSize="42px"
        lineHeight="120%"
        letterSpacing="-0.02em"
        padding="60px 20px"
      >
        You should be prepared to travel to Vilnius in September to give the
        talk in-person. So, check your calendar to join 20th Euruko in Vilnius,
        Lithuania, from 21th -23th of September 2023!
      </Text>
    </Flex>

    <Flex
      justifyContent="center"
      mt="20px"
    >
      <Text
        variant="regularText"
        fontSize="21px"
        fontWeight={500}
        color="#9A9A9A"
        width="400px"
      >
        All talks will be live-streamed, recorded, and published.
      </Text>
      <Center
        height="60px"
        m="0 10px"
      >
        <Divider orientation="vertical" />
      </Center>
      <Text
        variant="regularText"
        fontSize="21px"
        fontWeight={500}
        color="#9A9A9A"
        width="400px"
      >
        All talks and speakers must adhere to the conference →{' '}
        <Link
          textDecoration="underline"
          color="#2BBA7E"
          href="https://2023.euruko.org/code"
        >
          Code of Conduct
        </Link>
      </Text>
    </Flex>

    <Flex
      maxW="1620px"
      m="90px auto 50px auto"
      minWidth="100%"
      alignItems="center"
      backgroundColor="#2BBA7E"
      borderRadius="45px"
      justifyContent="center"
      flexWrap="wrap"
      backgroundImage={background2}
      backgroundPosition="right"
      backgroundRepeat="no-repeat"
    >
      <Heading
        variant="regularHeading"
        fontWeight={600}
        fontSize="84px"
        lineHeight="90%"
        padding="110px"
        letterSpacing="-0.06em"
        color="black"
      >
        Ready to <br />
        rock’n’roll?
      </Heading>
      <Button
        padding="60px"
        m="20px"
        minW="500px"
        variant="blackButton"
      >
        Apply
      </Button>
    </Flex>
  </Flex>
);
