// styles/theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#04091d',
      },
      html: {
        bg: '#04091d',
      }
    },
  },
});

export default theme;
