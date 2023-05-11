import { Box } from '@chakra-ui/react';

import { CallSpeakers } from './components/CallSpeakers';
import { CallSponsors } from './components/CallSponsors';
import { Celebration } from './components/Celebration';
import { GrabTicket } from './components/GrabTicket';
import { Logo } from './components/Logo';
import { MakeDifference } from './components/MakeDifference';
import { Nav } from './components/Nav';
import { NewExperience } from './components/NewExperience';

export const Component = () => (
  <Box
    color="white"
    backgroundColor="black"
    textAlign="center"
    paddingBottom="1000px"
  >
    <Nav />
    <Logo />
    <NewExperience />
    <Celebration />
    <GrabTicket />
    <MakeDifference />
    <CallSpeakers />
    <CallSponsors />
  </Box>
);

Component.displayName = 'MainRoute';
