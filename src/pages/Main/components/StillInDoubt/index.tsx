import { Box, Img, useMediaQuery } from '@chakra-ui/react';
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
  monument,
  vilnuis1,
  vilnuis2,
  vilnuis3,
  vilnuis4,
  vilnuis5,
  vilnuis6,
  vilnuis7
];

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: window.innerWidth / 2 > 750 ? 750 : window.innerWidth / 2,
  backgroundPosition: 'center'
};

export const StillInDoubt = () => {
  const [isLargerThan620] = useMediaQuery('(max-width: 620px)');
  const [isLargerThan1620] = useMediaQuery('(max-width: 1620px)');

  return (
    <Box
      backgroundColor="#D9D9D9"
      p="0 10px"
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
      </Box>
    </Box>
  );
};
