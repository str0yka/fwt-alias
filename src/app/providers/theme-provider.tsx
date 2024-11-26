import { CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material';

import { theme } from '@shared/config';

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <MUIThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MUIThemeProvider>
);
