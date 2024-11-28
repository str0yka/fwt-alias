import { Box, TextField, Typography } from '@mui/material';
import type { FC } from 'react';
import React, { useState } from 'react';

interface TextAreaProps extends Omit<React.ComponentProps<typeof TextField>, 'value'> {
  defaultValue?: string;
}

const maxWords = 100;

export const TextArea: FC<TextAreaProps> = ({ defaultValue, error, ...props }) => {
  const [text, setText] = useState<string>(defaultValue?.replaceAll(' ', '\n') || '');

  return (
    <Box sx={{ margin: '10px 0' }}>
      <TextField
        sx={{ borderRadius: '6px' }}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && text.split('\n').length >= maxWords) {
            e.stopPropagation();
            e.preventDefault();
          }
        }}
        multiline
        maxRows={10}
        fullWidth
        error={error}
        {...props}
      />
      <Typography
        variant='caption'
        gutterBottom
        color={error ? '#F87171' : '#71717A'}
        fontSize='14px'
        lineHeight='16px'
        fontWeight='500'
        sx={{ display: 'block', marginLeft: 'auto', width: 'max-content', marginTop: '12px' }}
      >
        Слов: {text.split('\n').filter((itm) => itm !== '').length}/{maxWords}
      </Typography>
    </Box>
  );
};
