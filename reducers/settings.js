import {
  SETTINGS
} from '../actions';

const settings = (state = {}, action) => {
  switch (action.type) {
    case SETTINGS:
      let newState = Object.assign([], state,
        action.payload.data
      );
      return newState;

    default:
      return state;
  }
}

export default settings;
