import { Flex, useMediaQuery, Heading } from '@chakra-ui/react';

export const Community = () => {
  const [isLargerThan750] = useMediaQuery('(max-width: 750px)');

  return (
    <Flex
      maxW="1540px"
      p="0 10px"
      margin="auto"
      flexDirection="column"
      color="#D9D9D9"
      mb="50px"
    >
      <Flex
        flexDirection="column"
        m="auto"
      >
        <Heading
          variant="regularHeading"
          fontWeight={600}
          fontSize={isLargerThan750 ? '42px' : '84px'}
          lineHeight="90%"
          letterSpacing="-0.06em"
          paddingTop="160px"
        >
          Community partners
        </Heading>
      </Flex>
    </Flex>
  );
};
