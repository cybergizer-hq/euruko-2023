import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const CallSpeakers = () => {
  const navigate = useNavigate();

  return (
    <Flex
      id="speakers"
      background="radial-gradient(50% 50% at 50% 50%, #2BBA7E 0%, rgba(0, 0, 0, 0) 100%)"
      backgroundPosition="left -100px"
      backgroundSize="60%"
      backgroundRepeat="no-repeat"
      pb="85px"
    >
      <Flex
        maxW="1520px"
        margin="40px auto"
        color="white"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          gap="20px"
          mt="130px"
          mb="115px"
          alignItems="center"
        >
          <Heading
            variant="regularHeading"
            fontSize="120px"
            fontWeight={600}
            width="740px"
          >
            CAll for <br />
            speakers
          </Heading>
          <Text
            variant="regularText"
            fontSize="42px"
            width="740px"
            fontWeight={500}
            p="0px 40px"
          >
            Join Matz and other top-notch speakers and tell everyone about
            trends in Ruby or what&apos;s going on in the community world.
          </Text>
        </Flex>
        <Button
          maxWidth="500px"
          maxHeight="120px"
          height="100%"
          width="100%"
          variant="blackButton"
          border="1px solid #D9D9D9"
          padding="40px"
          onClick={() => {
            navigate('/speakers');
          }}
        >
          Click for details
        </Button>
      </Flex>
    </Flex>
  );
};
