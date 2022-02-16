import { useCallback, useState } from 'react';
import { Formik } from 'formik';

import { Input } from '../../../components/elements';
import { useDispatch } from 'react-redux';
import { Creators as PokemonActions } from '../../../store/modules/pokemon/actions';

const SearchPokemon = () => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(null);

  const handleSubmitForm = useCallback(
    (value) => {
      if (value) {
        dispatch(PokemonActions.searchPokemon(value));
        return;
      }
      dispatch(PokemonActions.getPokemons(1));
    },
    [dispatch]
  );

  const getAllPokemons = useCallback(
    (value) => {
      dispatch(PokemonActions.getPokemons(value));
    },
    [dispatch]
  );

  const customHandleChange = useCallback(
    (event, change, submit) => {
      change(event);

      if (time) clearTimeout(time);
      setTime(setTimeout(() => submit(), 750));
    },
    [time]
  );

  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={(values) => {
        if (!values.search) {
          getAllPokemons(1);
          return;
        }

        handleSubmitForm(values.search.toLowerCase());
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        touched,
        submitForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            name='search'
            placeholder='Search for Pokemon by name or using its number'
            onChange={(e) => customHandleChange(e, handleChange, submitForm)}
            value={values.search}
            touched={touched.search}
            errors={errors.search}
          />
        </form>
      )}
    </Formik>
  );
};

export default SearchPokemon;
