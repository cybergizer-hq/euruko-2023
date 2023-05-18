import {
  Box,
  Flex,
  Heading,
  Img,
  Button,
  Link,
  useMediaQuery
} from '@chakra-ui/react';
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

const slideImages = [
  background,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08
];

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: window.innerWidth / 2 > 750 ? 750 : window.innerWidth / 2,
  backgroundPosition: 'center'
};

export const HowWeCelebrating = () => {
  const [isLargerThan620] = useMediaQuery('(max-width: 620px)');
  const [isLargerThan1620] = useMediaQuery('(max-width: 1620px)');

  return (
    <Box
      margin="auto"
      maxW="1540px"
      p="120px 10px 20px 10px"
    >
      <Slide
        autoplay={false}
        prevArrow={
          <Img
            src={leftArrow}
            transform={
              isLargerThan1620 ? 'translateX(-10px)' : 'translateX(-42px)'
            }
          />
        }
        nextArrow={
          <Img
            src={rightArrow}
            transform={
              isLargerThan1620 ? 'translateX(10px)' : 'translateX(42px)'
            }
          />
        }
      >
        {slideImages.map((slideImage) => (
          <Box
            key={slideImage}
            style={{ ...divStyle, backgroundImage: `url(${slideImage})` }}
            borderRadius={isLargerThan620 ? '20px' : '80px'}
          />
        ))}
      </Slide>
      <Flex
        maxW="1520px"
        margin="60px auto"
        p="10px"
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
          fontSize={isLargerThan620 ? '60px' : '84px'}
          lineHeight="90%"
          padding="75px 0"
          letterSpacing="-0.06em"
          color="black"
          maxW="950px"
        >
          JOIN EURUKO AND MAKE IT RUBY-DOO-BEE-DOO
        </Heading>
        <Link href="/#tickets">
          <Button
            padding={isLargerThan620 ? '30px' : '60px'}
            m="20px"
            variant="blackButton"
            fontSize={isLargerThan620 ? '30px' : undefined}
          >
            Buy your ticket
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
