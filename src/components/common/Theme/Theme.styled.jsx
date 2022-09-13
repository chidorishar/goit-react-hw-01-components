import { getQueriesForElement } from '@testing-library/react';

const theme = {
  borders: {
    small: '1px solid #cdcdcd',
  },
  colors: {
    textLight: '#ececec',
    textDark: '#121212',
    textGrey: '#9b9b9b',
    backgroundStats: '#f6faff',
    backgroundAvatar: '#c89f36',
    onlineStatus: {
      online: '#008000',
      offline: '#ff0000',
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    none: '0',
    normal: '5px',
    round: '50%',
  },
  sizes: {
    cardSmall: '200px',
    cardNormal: '300px',
    cardWide: '500px',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  shadows: {
    small: '3px 5px 9px 0px #b6b6b6',
    medium: '2px 10px 20px #b6b6b6',
  },
};

export { theme };
