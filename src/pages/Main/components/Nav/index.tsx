import { useState } from 'react';

import {
  List,
  ListItem,
  Link,
  Flex,
  Img,
  Collapse,
  useMediaQuery,
  Text,
  Box,
  Center
} from '@chakra-ui/react';

import logo from './assets/logo.svg';

export const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [isLargerThan1180] = useMediaQuery('(max-width: 1180px)');
  const [isLargerThan1500] = useMediaQuery('(max-width: 1500px)');

  return (
    <Box

    // backgroundColor='red'
    // border='1px solid red'
    // w='100%'
    >
      <Box
      // maxWidth="1920px"
      // m="auto"
      >
        <nav>
          {isLargerThan1180 ? (
            <Flex
              flexDirection="column"
              maxWidth="1920px"
              m="auto"
              width="100%"
              position="fixed"
              top={0}
              zIndex={999}
              backgroundColor={isMenuOpen ? '#D9D9D9' : 'black'}
              boxShadow="2xl"
            >
              <Center
                textAlign="center"
                width="100%"
              >
                <Text
                  display="block"
                  fontWeight={600}
                  lineHeight="90%"
                  letterSpacing="-0.06em"
                  fontSize="42px"
                  m="30px"
                  color="#606060"
                  textDecoration="underline"
                  cursor="pointer"
                  onClick={() => setMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? '<back' : 'menu'}
                </Text>
              </Center>
              <Collapse in={isMenuOpen}>
                <List
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                  sx={{ '& li': { margin: '20px' } }}
                >
                  <ListItem>
                    <Link
                      variant="mobileNavLink"
                      href="/#tickets"
                    >
                      Tickets
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      variant="mobileNavLink"
                      href="/#speakers"
                    >
                      Speakers
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      variant="mobileNavLink"
                      href="/#"
                    >
                      Agenda
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      variant="mobileNavLink"
                      href="/#callSponsors"
                    >
                      Sponsors
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      variant="mobileNavLink"
                      href="/#callCommunities"
                    >
                      Communities
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      variant="mobileNavLink"
                      href="/jobBoard"
                    >
                      Job board
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      variant="mobileNavLink"
                      href="/#contacts"
                    >
                      Contacts
                    </Link>
                  </ListItem>
                </List>
              </Collapse>
            </Flex>
          ) : (
            <Flex
              position="fixed"
              top={0}
              zIndex={999}
              backgroundColor="black"
              width="100%"
              boxShadow="2xl"
            >
              <Flex
                maxWidth="1920px"
                m="auto"
                width="100%"
              >
                <List
                  display="flex"
                  justifyContent="space-between"
                  width="100%"
                  m="40px 50px"
                  sx={{ '& li': { display: 'flex' } }}
                  gap={isLargerThan1500 ? '20px' : '60px'}
                >
                  <ListItem>
                    <Link
                      variant="navLink"
                      href="/#tickets"
                    >
                      Tickets
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      variant="navLink"
                      href="/#speakers"
                    >
                      Speakers
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      variant="navLink"
                      href="/#"
                    >
                      Agenda
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      variant="navLink"
                      href="/#callSponsors"
                    >
                      Sponsors
                    </Link>
                  </ListItem>
                  <ListItem
                    flexGrow={1}
                    justifyContent="center"
                  />
                  <ListItem>
                    <Link
                      variant="navLink"
                      href="/#callCommunities"
                    >
                      Communities
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      variant="navLink"
                      href="/jobBoard"
                    >
                      Job board
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      variant="navLink"
                      href="/#contacts"
                    >
                      Contacts
                    </Link>
                  </ListItem>
                </List>
                <Link
                  position="absolute"
                  top="30px"
                  left="50%"
                  transform="translateX(-50%)"
                  href="/#"
                >
                  <Img src={logo} />
                </Link>
              </Flex>
            </Flex>
          )}
        </nav>
      </Box>
    </Box>
  );
};
