import produce from 'immer';
import { HANDLE_MODAL } from './actions';

export const INITIAL_STATE_SHARED = {
  modal: false,
};

export default function sharedReducer(state = INITIAL_STATE_SHARED, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case HANDLE_MODAL:
        draft.modal = action.payload;
        break;
      default:
    }
  });
}
