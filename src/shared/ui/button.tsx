import { Button as MUIButton, styled } from '@mui/material';

type ButtonVariant = 'contained' | 'outlined';

interface ButtonProps extends React.ComponentProps<typeof MUIButton> {
  variant?: ButtonVariant;
}

export const Button = styled(MUIButton)<ButtonProps>(({ variant, theme }) => ({
  textTransform: 'none',
  borderRadius: 6,
  ...(variant === 'contained' && {
    backgroundColor: theme.palette.main[50],
    color: theme.palette.background.default
  }),
  ...(variant === 'outlined' && {
    backgroundColor: 'transparent',
    color: theme.palette.main[50],
    borderColor: theme.palette.main[50]
  })
}));
