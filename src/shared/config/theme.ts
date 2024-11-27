import type { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material';

export const themeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: '#09090B',
      paper: '#09090B'
    },
    main: {
      '50': '#fafafa',
      '100': '#f4f4f5',
      '200': '#e4e4e7',
      '300': '#d4d4d8',
      '400': '#a1a1aa',
      '500': '#71717a',
      '600': '#52525b',
      '700': '#3f3f46',
      '800': '#27272a',
      '900': '#18181b'
    }
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
} satisfies ThemeOptions;

export const theme = createTheme(themeOptions);
