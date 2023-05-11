import { Button, Flex, Heading, Text } from '@chakra-ui/react';

export const CallCommunities = () => (
  <Flex
    id="callCommunities"
    background="radial-gradient(50% 50% at 50% 50%, #FF74BD 0%, rgba(0, 0, 0, 0) 100%);"
    backgroundPosition="left -100px"
    backgroundSize="60%"
    backgroundRepeat="no-repeat"
    pb="60px"
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
            fontSize="84px"
            fontWeight={600}
            width="740px"
          >
            CAll for <br />
            communities
          </Heading>
          <Button
            maxHeight="120px"
            height="100%"
            variant="whiteButton"
            border="1px solid #D9D9D9"
            padding="40px"
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
            fontSize="35px"
            width="740px"
            fontWeight={500}
          >
            New opportunities for communities! Euruko goes beyond the borders of
            Europe and adds one more day to encourages Ruby communities from all
            over the world to join and share their experience and knowledge.
          </Text>
          <Text
            variant="regularText"
            fontSize="21px"
            width="740px"
            fontWeight={500}
            maxWidth="550px"
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
