import {OPEN, CLOSE} from '../actions';

const initialState = {
      modalIsOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN:
      return Object.assign(state, {
        modalIsOpen:true
      })

    case CLOSE:
      return Object.assign(state, {
        modalIsOpen:false
      })

    default:
      return state;
  }
};