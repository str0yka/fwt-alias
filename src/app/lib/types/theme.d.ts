import type { Color } from '@mui/material';
import type { DistributedOmit } from 'type-fest';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    main: DistributedOmit<Color, 'A100' | 'A200' | 'A400' | 'A700'>;
  }

  interface PaletteOptions {
    main: DistributedOmit<Color, 'A100' | 'A200' | 'A400' | 'A700'>;
  }
}
