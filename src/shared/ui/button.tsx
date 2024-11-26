import { Button as MUIButton, styled } from '@mui/material';

type ButtonVariant = 'contained' | 'outlined';

interface ButtonProps extends React.ComponentProps<typeof MUIButton> {
  variant?: ButtonVariant;
}

export const Button = styled(MUIButton)<ButtonProps>(({ theme }) => ({
  textTransform: 'none',
  backgroundColor: theme.palette.primary['50'],
  color: theme.palette.background.default
}));
