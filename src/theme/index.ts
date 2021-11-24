import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,

  styles: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global: props => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('#ffffff', '#191919')(props),
      },
    }),
  },

  fonts: {
    body: "'Noto Sans JP', sans-serif",
  },

  colors: {
    brand: {
      red: '#d60928',
    },
  },
});

export default theme;
