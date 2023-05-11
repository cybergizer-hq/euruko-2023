import { Flex, Heading, Img, Text } from '@chakra-ui/react';

import community from './assets/community.svg';
import speakers from './assets/speakers.svg';
import traveling from './assets/traveling.svg';

export const NewExperience = () => (
  <Flex
    m="auto"
    justifyContent="center"
    maxW="1920px"
    gap="20px"
    flexWrap="wrap"
    sx={{
      '& >div': {
        borderRadius: '45px',
        maxWidth: '493px',
        height: '610px',
        backgroundColor: '#D9D9D9',
        padding: '30px',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        color: 'black'
      },
      '& img': {
        width: '237px',
        height: '270px'
      }
    }}
  >
    <Flex>
      <Img src={speakers} />
      <Heading
        fontSize="42px"
        variant="regularHeading"
      >
        Top-notch speakers
      </Heading>
      <Text
        lineHeight="140%"
        margin="0px 30px 60px 30px"
        fontSize="21px"
      >
        Recognized subject matter experts led by Euruko habitué chief creator of
        Ruby language Yukihiro Matsumoto
      </Text>
    </Flex>
    <Flex>
      <Flex
        width="280px"
        p="10px 20px"
        borderRadius="32px"
        border="1px solid black"
        position="absolute"
        transform="translateY(-58px)"
        backgroundColor="#D9D9D9"
      >
        <Heading
          variant="regularHeading"
          fontSize="18px"
        >
          Brand new experience at Euruko’23!
        </Heading>
      </Flex>
      <Img src={community} />
      <Heading
        fontSize="42px"
        variant="regularHeading"
      >
        Community networking
      </Heading>
      <Text
        lineHeight="140%"
        margin="0px 10px 60px 10px"
        fontSize="21px"
      >
        Boost your community with new knowledge, valuable content, engaging
        activities and have fun with like-minded people.
      </Text>
    </Flex>
    <Flex>
      <Img src={traveling} />
      <Heading
        fontSize="42px"
        variant="regularHeading"
      >
        Unforgettable traveling
      </Heading>
      <Text
        lineHeight="140%"
        margin="0px 10px 60px 10px"
        fontSize="21px"
      >
        Vilnius has everything you need: the old town and all the modern
        facilities, unique nature and delicious cuisine to meet friends.
      </Text>
    </Flex>
  </Flex>
);
