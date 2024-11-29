import { TextField } from '@mui/material';

interface TextAreaProps extends React.ComponentProps<typeof TextField> {}

export const TextArea = (props: TextAreaProps) => {
  return (
    <TextField
      multiline
      maxRows={10}
      fullWidth
      sx={{
        '&': {
          margin: '10px 0',
          border: 'none'
        },
        '& .MuiInputBase-root': {
          borderRadius: '6px',
          padding: '12px',
          backgroundColor: 'main.900',
          color: 'main.50',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          }
        },
        '& .MuiOutlinedInput-root.Mui-focused': {
          outline: 'none'
        },
        '& .MuiFormHelperText-root': {
          margin: '12px 0 0 auto',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '16px',
          color: 'main.500'
        },
        '& .MuiFormHelperText-root.css-1lopgng-MuiFormHelperText-root.Mui-error': {
          color: 'danger.400'
        },
        '& .MuiInputBase-root.Mui-error': {
          borderWidth: '1px',
          borderColor: 'danger.400',
          borderStyle: 'solid'
        },
        '& .css-1upswah-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':
          {
            border: 'none'
          }
      }}
      {...props}
    />
  );
};
