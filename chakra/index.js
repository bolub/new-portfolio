import { extendTheme } from '@chakra-ui/react';
import { brand } from './colors';
import { components } from './components';
import { config } from './config';

let defaultHeading, defaultBody, styles, colors, colorMode;

if (typeof window !== 'undefined') {
  defaultHeading = localStorage.getItem('fontHeading') || 'Space Grotesk';
  defaultBody = localStorage.getItem('fontBody') || 'Jost';
  colorMode = localStorage.getItem('chakra-ui-color-mode');

  styles = {
    global: {
      'html, body': {
        fontFamily: defaultBody,
        scrollBehavior: 'smooth',
      },

      'h1, h2, h3, h4, h5, h6': {
        fontFamily: defaultHeading,
      },

      code: {
        width: '100%',
        display: 'block',
        overflowWrap: 'break-word',
        whiteSpace: 'pre-wrap',
        background: '#f2f2f2',
        fontSize: '14px',
        color: colorMode === 'dark' && 'black',
        p: 3,
      },

      '.rs-container': {
        display: 'flex',
        // bg: "brand.500",
        justifyContent: 'center',
      },

      '.rs-play, .rs-stop, .rs-pause, .rs-resume': {
        width: '40px',
        height: '40px',
        borderRadius: '100px !important',
        padding: '4px',
        marginRight: '10px',
        backgroundColor: '#f2f2f2 !important',
        color: '#cb1a41 !important',
        border: '1px solid #cb1a41 !important',
      },
    },
  };

  colors = {
    brand,
    red: {
      50: '#ffe4ed',
      100: '#fbb9c8',
      200: '#f28da4',
      300: '#ec607f',
      400: '#e5345b',
      500: '#cb1a41',
      600: '#9f1233',
      700: '#730b23',
      800: '#470415',
      900: '#1e0006',
    },
    blue: {
      50: '#e5eeff',
      100: '#b9cbfb',
      200: '#8da8f3',
      300: '#6185eb',
      400: '#3563e4',
      500: '#1b49ca',
      600: '#12399e',
      700: '#0a2972',
      800: '#031847',
      900: '#00081d',
    },
    yellow: {
      50: '#fff4dc',
      100: '#fee2b0',
      200: '#fbce82',
      300: '#f8bb52',
      400: '#f6a723',
      500: '#dc8e09',
      600: '#ab6e04',
      700: '#7b4f01',
      800: '#4a2f00',
      900: '#1c0f00',
    },
  };
}

export const customTheme = extendTheme({ colors, styles, components, config });
