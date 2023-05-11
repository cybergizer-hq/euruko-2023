import { useEffect, useState } from 'react';

import { Button, Flex, Heading, Img, Text } from '@chakra-ui/react';

import grab from './assets/grab.svg';

const END_DATE = new Date('2023-06-11T10:34:00Z');

export const GrabTicket = () => {
  const [days, setDays] = useState('0');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [isTimerVisible, setTimerVisible] = useState<boolean>(true);

  const setTime = () => {
    const diffInMs = END_DATE.getTime() - new Date().getTime();

    if (diffInMs > 0) {
      const diffInMs = END_DATE.getTime() - new Date().getTime();
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const diffInHours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
      const diffInMinutes = Math.floor((diffInMs / (1000 * 60)) % 60);
      const diffInSeconds = Math.floor((diffInMs / 1000) % 60);

      setDays(String(diffInDays));
      setHours(String(diffInHours).padStart(2, '0'));
      setMinutes(String(diffInMinutes).padStart(2, '0'));
      setSeconds(String(diffInSeconds).padStart(2, '0'));
    } else {
      setTimerVisible(false);
    }
  };

  useEffect(() => {
    const diffInMs = END_DATE.getTime() - new Date().getTime();

    if (diffInMs > 0) {
      const timer = setInterval(() => {
        setTime();
      }, 1000);

      return () => clearInterval(timer);
    }

    setTimerVisible(false);

    return undefined;
  }, []);

  return (
    <>
      <Flex
        maxW="1520px"
        margin="auto"
        border="1px solid #D9D9D9"
        borderRadius="45px"
        justifyContent="space-evenly"
        padding="60px"
      >
        <Img src={grab} />
        <Heading
          variant="regularHeading"
          fontSize="84px"
          fontWeight={600}
          maxWidth="900px"
        >
          Get ready to grab your ticket!
        </Heading>
        <Img src={grab} />
      </Flex>
      <Flex
        maxW="1520px"
        margin="auto"
        color="black"
        mt="20px"
        pb="120px"
        flexWrap="wrap"
        gap="20px"
        justifyContent="center"
      >
        <Flex
          backgroundColor="#D9D9D9"
          borderRadius="45px"
          padding="60px"
          minHeight="520px"
          maxWidth="750px"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            variant="regularText"
            fontSize="40px"
            fontWeight={500}
            lineHeight="106%"
          >
            Make sure to mark the launch date on your calendar.
          </Text>
          <Text
            variant="regularText"
            fontSize="21px"
            fontWeight={400}
            lineHeight="106%"
          >
            Hurry! The number of tickets <br />
            in each batch is limited.
          </Text>
          {isTimerVisible ? (
            <Flex
              border="1px solid black"
              borderRadius="45px"
              maxWidth="500px"
              maxHeight="120px"
              height="100%"
              width="100%"
              mb="10px"
              textAlign="center"
              flexDirection="column"
              p="15px"
            >
              <Text variant="clockText">Until next batch</Text>
              <Flex
                gap="15px"
                margin="auto"
              >
                <Flex flexDirection="column">
                  <Text variant="clockNumeral">{days}</Text>
                  <Text variant="clockText">Days</Text>
                </Flex>
                <Text variant="clockNumeral">:</Text>
                <Flex flexDirection="column">
                  <Text variant="clockNumeral">{hours}</Text>
                  <Text variant="clockText">Hours</Text>
                </Flex>
                <Text variant="clockNumeral">:</Text>
                <Flex flexDirection="column">
                  <Text variant="clockNumeral">{minutes}</Text>
                  <Text variant="clockText">Min</Text>
                </Flex>
                <Text variant="clockNumeral">:</Text>
                <Flex flexDirection="column">
                  <Text variant="clockNumeral">{seconds}</Text>
                  <Text variant="clockText">Sec</Text>
                </Flex>
              </Flex>
            </Flex>
          ) : (
            <Button
              maxWidth="500px"
              maxHeight="120px"
              height="100%"
              width="100%"
              variant="blackButton"
              mb="10px"
            >
              Buy your ticket
            </Button>
          )}
        </Flex>
        <Flex
          backgroundColor="#D9D9D9"
          borderRadius="45px"
          padding="60px"
          maxWidth="750px"
          minHeight="520px"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            variant="regularText"
            fontSize="40px"
            fontWeight={500}
            lineHeight="106%"
          >
            Grab your free online ticket now <br />& support our community track
            with your donations.
          </Text>
          <Text
            variant="regularText"
            fontSize="21px"
            fontWeight={400}
            lineHeight="106%"
          >
            100% will be spend on Euruko community day activities.
          </Text>
          <Button
            maxWidth="500px"
            maxHeight="120px"
            height="100%"
            width="100%"
            variant="blackButton"
            mb="10px"
          >
            Get online ticket
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
