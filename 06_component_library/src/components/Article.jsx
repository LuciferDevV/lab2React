import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';  // Импортируем компоненты из MUI

function Article({ title, text }) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{text}</Typography>
      </CardContent>
    </Card>
  );
}

export default Article;
