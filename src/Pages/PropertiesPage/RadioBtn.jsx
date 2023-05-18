import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
  return (
    <div>
    <Checkbox
  {...label}
  icon={<FavoriteBorder style={{ color: '#EC6337', fontSize: '30px' }} />}
  checkedIcon={<Favorite style={{ color: '#EC6337', fontSize: '30px' }} />}
  style={{ fontSize: '30px' }}
/>

    </div>
  );
}
