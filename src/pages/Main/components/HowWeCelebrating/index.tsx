import { Box, Flex, Heading, Img, Button } from '@chakra-ui/react';
import { Slide } from 'react-slideshow-image';

import background from './assets/background.png';
import img02 from './assets/gallery/02.png';
import img03 from './assets/gallery/03.png';
import img04 from './assets/gallery/04.png';
import img05 from './assets/gallery/05.png';
import img06 from './assets/gallery/06.png';
import img07 from './assets/gallery/07.png';
import img08 from './assets/gallery/08.png';
import leftArrow from './assets/leftArrow.svg';
import rightArrow from './assets/rightArrow.svg';

import 'react-slideshow-image/dist/styles.css';

const slideImages = [img02, img03, img04, img05, img06, img07, img08];

const divStyle = {
  borderRadius: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '750px',
  backgroundPosition: 'center'
};

export const HowWeCelebrating = () => (
  <Box
    margin="auto"
    maxW="1520px"
    pt="120px"
    pb="20px"
  >
    <Slide
      autoplay={false}
      prevArrow={
        <Img
          src={leftArrow}
          transform="translateX(-42px)"
        />
      }
      nextArrow={
        <Img
          src={rightArrow}
          transform="translateX(42px)"
        />
      }
    >
      <Box style={{ ...divStyle, backgroundImage: `url(${background})` }}>
        <Flex justifyContent="center">
          <Heading
            variant="regularHeading"
            fontSize="120px"
            fontWeight={600}
          >
            Never been to Euruko? Look how we&apos;re celebrating!
          </Heading>
        </Flex>
      </Box>
      {slideImages.map((slideImage) => (
        <Box
          key={slideImage}
          style={{ ...divStyle, backgroundImage: `url(${slideImage})` }}
        />
      ))}
    </Slide>
    <Flex
      maxW="1520px"
      margin="60px auto"
      alignItems="center"
      backgroundColor="#D9D9D9"
      borderRadius="45px"
      justifyContent="space-around"
      flexWrap="wrap"
      flexDirection="row"
    >
      <Heading
        variant="regularHeading"
        fontWeight={600}
        fontSize="84px"
        lineHeight="90%"
        padding="75px 0"
        letterSpacing="-0.06em"
        color="black"
        maxW="950px"
      >
        JOIN EURUKO AND MAKE IT RUBY-DOO-BEE-DOO
      </Heading>
      <Button
        padding="60px"
        m="20px"
        variant="blackButton"
      >
        Buy your ticket
      </Button>
    </Flex>
  </Box>
);
