import { Box, Img, useMediaQuery } from '@chakra-ui/react';
import { Slide } from 'react-slideshow-image';

import { slideImages } from './assets';
import leftArrow from './assets/leftArrow.svg';
import rightArrow from './assets/rightArrow.svg';

import 'react-slideshow-image/dist/styles.css';

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
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: 'cover',
                height:
                  window.innerWidth / 2 > 750 ? 750 : window.innerWidth / 2,
                backgroundPosition: 'center'
              }}
              borderRadius={isLargerThan620 ? '20px' : '80px'}
            >
              <Img
                src={slideImage}
                loading="lazy"
              />
            </Box>
          ))}
        </Slide>
      </Box>
    </Box>
  );
};
