import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box } from '@mui/material';

import { Creators as PokemonActions } from '../../store/modules/pokemon/actions';
import { Creators as SharedActions } from '../../store/modules/shared/actions';
import { SearchPokemon, ModalDetailPokemon } from '../../components/blocks';
import { Modal } from '../../components/elements';
import CardPokemon from '../../components/blocks/CardPokemon';
import { LIMIT_POKEMONS } from '../../constants/config';

import {
  Box as BoxStyled,
  Container,
  Header,
  PaginationStyled,
  TitleStyled,
  WrapperBg,
} from './styles';

const Dashboard = () => {
  const pokes = useSelector((state) => state.pokemons.pokemons);
  const statusModal = useSelector((state) => state.shared.modal);
  const pagination = useSelector((state) => state.pokemons.pages);
  const loading = useSelector((state) => state.pokemons.loadingStatus);
  const isSearchFilled = useSelector((state) => state.pokemons.isSearchFilled);
  const notFoundItems = useSelector((state) => state.pokemons.error);
  const dispatch = useDispatch();

  const actionGetPokemons = useCallback(() => {
    dispatch(PokemonActions.getPokemons(1));
  }, [dispatch]);

  useEffect(() => {
    actionGetPokemons();
  }, [actionGetPokemons]);

  const handlePagination = (event, value) => {
    dispatch(PokemonActions.getPokemons(value));
  };

  const handleCloseModal = useCallback(() => {
    dispatch(PokemonActions.getInfoPokemon('CLEAR'));
    dispatch(SharedActions.handleModal(false));
  }, [dispatch]);

  return (
    <>
      <WrapperBg>
        <Container>
          <Header container>
            <Grid item xs={12} md={5}>
              <TitleStyled variant='h2' size='h3'>
                POKEDEX
              </TitleStyled>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box mt={2} />
              <SearchPokemon />
            </Grid>
          </Header>
          {!isSearchFilled && (
            <PaginationStyled
              showFirstButton
              showLastButton
              count={Math.ceil(pagination / LIMIT_POKEMONS)}
              onChange={handlePagination}
              disabled={loading === 'loading'}
            />
          )}
          <BoxStyled>
            {pokes.map((data) => (
              <CardPokemon key={data.id} data={data} loading={loading} />
            ))}
          </BoxStyled>
          {notFoundItems && <h2>No results found</h2>}
        </Container>
      </WrapperBg>
      <Modal open={statusModal} handleClose={handleCloseModal}>
        <ModalDetailPokemon />
      </Modal>
    </>
  );
};

export default Dashboard;
