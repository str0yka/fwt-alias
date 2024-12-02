import { TextField, styled } from '@mui/material';

interface TextAreaProps extends React.ComponentProps<typeof TextField> {}

export const StyledTextArea = styled(TextField)(({ theme }) => ({
  margin: '10px 0',
  '& *': {
    border: 'none'
  },
  '& .MuiInputBase-root': {
    borderRadius: '6px',
    padding: '12px',
    backgroundColor: theme.palette.main[900],
    color: theme.palette.main[50],
    border: `1px solid ${theme.palette.main[600]}`
  },
  '& .MuiFormHelperText-root': {
    margin: '12px 0 0 auto',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    color: theme.palette.main[500]
  },

  '& .MuiInputBase-root.Mui-error': {
    border: `1px solid ${theme.palette.danger[400]}`
  },
  '& .MuiFormHelperText-root.css-1lopgng-MuiFormHelperText-root.Mui-error': {
    color: theme.palette.danger[400]
  }
}));

export const TextArea = (props: TextAreaProps) => {
  return (
    <StyledTextArea
      multiline
      maxRows={10}
      fullWidth
      {...props}
    />
  );
};
