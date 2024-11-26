import '@material-ui/core/styles';
import type { Color } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    primary: Color;
  }
}
