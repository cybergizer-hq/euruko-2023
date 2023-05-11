import { extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react';

import { getScrollbarStyles } from './utils/getScrollbarStyles';

const regularText = defineStyle({
  fontFamily: `'Syne', sans-serif`,
  lineHeight: '120%',
  letterSpacing: '-0.02em',
  textAlign: 'center'
});

const clockText = defineStyle({
  fontFamily: `'Syne', sans-serif`,
  textTransform: 'uppercase',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '106%',
  textAlign: 'center',
  color: 'black'
});

const clockNumeral = defineStyle({
  fontFamily: `'Helvetica', sans-serif`,
  fontWeight: 400,
  fontSize: '56px',
  lineHeight: '110%',
  letterSpacing: '-0.02em',
  color: 'black'
});

const regularHeading = defineStyle({
  fontFamily: `'Syne', sans-serif`,
  lineHeight: '90%',
  letterSpacing: '-0.06em',
  textAlign: 'center',
  textTransform: 'uppercase'
});

const navLink = defineStyle({
  fontFamily: `'Syne', sans-serif`,
  textTransform: 'uppercase',
  fontWeight: 600,
  lineHeight: '90%',
  letterSpacing: '-0.06em',
  textAlign: 'center',
  fontSize: '27px'
});

const blackButton = defineStyle({
  fontWeight: 600,
  lineHeight: '90%',
  letterSpacing: '-0.06em',
  fontSize: '42px',
  backgroundColor: 'black',
  color: '#D9D9D9',
  textTransform: 'uppercase',
  borderRadius: '45px'
});

const whiteButton = defineStyle({
  fontWeight: 600,
  lineHeight: '90%',
  letterSpacing: '-0.06em',
  fontSize: '42px',
  textTransform: 'uppercase',
  backgroundColor: '#D9D9D9',
  color: 'black',
  borderRadius: '45px'
});

const linkButton = defineStyle({
  fontWeight: 500,
  lineHeight: '120%',
  letterSpacing: '-0.02em',
  fontSize: '27px',
  border: '1px solid black',
  borderRadius: '40px',
  maxWidth: '328px',
  padding: '28px',
  textDecoration: 'underline'
});

export const theme = extendTheme({
  styles: {
    global: {
      '*': {
        ...getScrollbarStyles()
      }
    }
  },
  components: {
    Text: defineStyleConfig({
      variants: {
        regularText,
        clockText,
        clockNumeral
      }
    }),
    Heading: defineStyleConfig({
      variants: { regularHeading }
    }),
    Link: defineStyleConfig({
      variants: { navLink }
    }),
    Button: defineStyleConfig({
      variants: { blackButton, linkButton, whiteButton }
    })
  },
  fonts: {
    body: `'Syne', sans-serif`
  }
});
