import { Button, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const CallCommunities = () => {
  const [isLargerThan700] = useMediaQuery('(max-width: 700px)');
  const navigate = useNavigate();

  return (
    <Flex
      id="callCommunities"
      background="radial-gradient(50% 50% at 50% 50%, #FF74BD 0%, rgba(0, 0, 0, 0) 100%);"
      backgroundPosition="left -100px"
      backgroundSize="60%"
      backgroundRepeat="no-repeat"
      pb="60px"
    >
      <Flex
        maxW="1540px"
        p="0 10px"
        margin="40px auto"
        color="white"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          gap="70px"
          mt="200px"
          mb="115px"
          alignItems="center"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            gap="70px"
            justifyContent="space-between"
          >
            <Heading
              variant="regularHeading"
              fontSize={isLargerThan700 ? '42px' : '84px'}
              fontWeight={600}
              maxWidth="740px"
            >
              CAll for <br />
              communities
            </Heading>
            <Button
              maxHeight="120px"
              height="100%"
              variant="whiteButton"
              border="1px solid #D9D9D9"
              padding={isLargerThan700 ? '20px' : '40px'}
              whiteSpace="pre-wrap"
              fontSize={isLargerThan700 ? '28px' : undefined}
              onClick={() => {
                navigate('/community');
              }}
            >
              Board of communities
            </Button>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            gap="50px"
            justifyContent="space-between"
          >
            <Text
              variant="regularText"
              fontSize={isLargerThan700 ? '24px' : '35px'}
              maxWidth="740px"
              fontWeight={500}
            >
              New opportunities for communities! Euruko goes beyond the borders
              of Europe and adds one more day to encourages Ruby communities
              from all over the world to join and share their experience and
              knowledge.
            </Text>
            <Text
              variant="regularText"
              fontSize="21px"
              maxWidth="740px"
              fontWeight={500}
            >
              Tell everyone how you&apos;re growing your community, host a Ruby
              workshop or AMA-session, and pitch your country in the competition
              to host the next Euruko.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
