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

import { slideImages } from './assets';
import leftArrow from './assets/leftArrow.svg';
import rightArrow from './assets/rightArrow.svg';

import 'react-slideshow-image/dist/styles.css';

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
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundSize: 'cover',
              height: window.innerWidth / 2 > 750 ? 750 : window.innerWidth / 2,
              backgroundPosition: 'center'
            }}
            borderRadius={isLargerThan620 ? '20px' : '80px'}
          >
            <Img
              loading="lazy"
              src={slideImage}
            />
          </Box>
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
