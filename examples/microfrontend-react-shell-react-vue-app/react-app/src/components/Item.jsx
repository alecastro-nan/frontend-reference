import React from 'react';
import { ListItem, ListItemButton, Typography } from '@mui/material';
import { useQuestionTools } from '../hooks/useTrivia';

const Item = ({ label, index, disabled, selected, correctAnswer }) => {
  const { setAnswer } = useQuestionTools();
  const handleClick = (label, index) => {
    const isCorrect = label === correctAnswer;
    setAnswer(label, index, isCorrect);
  };
  return (
    <>
      <ListItem>
        <ListItemButton
          disabled={disabled}
          sx={{ boxShadow: 1, margin: '0.5rem auto' }}
          onClick={() => handleClick(label, index)}
          selected={selected}
        >
          <Typography>{label}</Typography>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default Item;
