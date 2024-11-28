import { Box } from '@mui/material';

import { Button } from '@shared/ui';

export const HomePage = () => (
  <>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flexGrow: '1',
        gap: '10px 0'
      }}
    >
      <Button
        sx={{ width: '100%' }}
        variant='contained'
      >
        Создать игру
      </Button>
      <Button
        sx={{ width: '100%' }}
        variant='outlined'
      >
        Создать игру
      </Button>
    </Box>
  </>
);
