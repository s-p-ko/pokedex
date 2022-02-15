export const HANDLE_MODAL = 'pokemon_inf/HANDLE_MODAL';

export const Creators = {
  handleModal(value) {
    return {
      type: HANDLE_MODAL,
      payload: value,
    };
  },
};
