import styled from 'styled-components';
import { Grid, Pagination } from '@mui/material';

import { Text } from '../../components/elements';
import BackgroundImage from '../../assets/img/pokedex-background.jpg';

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-gap: 15px 15px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 30px 30px;
  width: 100%;
`;

export const Header = styled(Grid)`
  margin-bottom: 30px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const PaginationStyled = styled(Pagination)`
  margin-bottom: 20px;
  display: flex;
  justify-content: left;
`;

export const TitleStyled = styled(Text)`
  font-size: 50px;
  color: #000066;
  margin-bottom: 15px;
`;

export const WrapperBg = styled.div`
  background: url(${BackgroundImage});
  height: 150vh;
`;
