import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react';
import { Slide } from 'react-slideshow-image';

import leftArrow from './assets/leftArrow.svg';
import monument from './assets/monument.png';
import rightArrow from './assets/rightArrow.svg';
import vilnuis1 from './assets/Vilnius/vilnuis1.png';
import vilnuis2 from './assets/Vilnius/vilnuis2.png';
import vilnuis3 from './assets/Vilnius/vilnuis3.png';
import vilnuis4 from './assets/Vilnius/vilnuis4.png';
import vilnuis5 from './assets/Vilnius/vilnuis5.png';
import vilnuis6 from './assets/Vilnius/vilnuis6.png';
import vilnuis7 from './assets/Vilnius/vilnuis7.png';

import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  vilnuis1,
  vilnuis2,
  vilnuis3,
  vilnuis4,
  vilnuis5,
  vilnuis6,
  vilnuis7
];

const divStyle = {
  borderRadius: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '750px',
  backgroundPosition: 'center'
};

export const StillInDoubt = () => (
  <Box
    backgroundColor="#D9D9D9"
    pb="40px"
  >
    <Box
      margin="auto"
      maxW="1520px"
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
        <Box style={{ ...divStyle }}>
          <Flex
            color="black"
            justifyContent="center"
          >
            <Flex
              maxWidth="770px"
              flexDirection="column"
              marginTop="110px"
              alignItems="center"
            >
              <Heading
                variant="regularHeading"
                fontSize="120px"
                fontWeight={600}
              >
                Still in <br />
                doubt?
              </Heading>
              <Text
                variant="regularText"
                fontSize="35px"
                fontWeight={500}
                mt="60px"
                maxW="600px"
              >
                Immerse yourself in the unique atmosphere of Vilnius, which is
                celebrating 700 years of youth this year.
              </Text>
            </Flex>
            <Img
              src={monument}
              ml="40px"
            />
          </Flex>
        </Box>
        {slideImages.map((slideImage) => (
          <Box
            key={slideImage}
            style={{ ...divStyle, backgroundImage: `url(${slideImage})` }}
          />
        ))}
      </Slide>
    </Box>
  </Box>
);
