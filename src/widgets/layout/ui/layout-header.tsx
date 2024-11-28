import { Box } from '@mui/material';

import { ReactComponent as Logo } from '@app/assets/icons/logo.svg';

export const LayoutHeader = () => (
  <header>
    <Box
      sx={{
        borderBottom: '1px solid #18181B',
        padding: '25px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Logo />
    </Box>
  </header>
);
