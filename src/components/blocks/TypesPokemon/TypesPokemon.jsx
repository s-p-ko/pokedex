import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Label, Box } from './styles';

const TypesPokemon = ({ data, loading }) => {
  return (
    <Box>
      {data.map((item) => {
        return loading === 'loading' ? (
          <Skeleton
            key={item.type.name}
            animation='wave'
            variant='rect'
            width={50}
            height={30}
          />
        ) : (
          <Label key={item.type.name} color={item.type.name}>
            {item.type.name}
          </Label>
        );
      })}
    </Box>
  );
};

export default TypesPokemon;
