import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal'

const initialState = {
 modalIsOpen: false
}

const loginModal = (state = initialState, action) => {
  // console.log(action)
  // console.log(state)

  switch (action.type) {
    case 'OPEN_MODAL':
      return  Object.assign({}, state, {
        modalIsOpen: true
      })
    case 'CLOSE_MODAL':
      return  Object.assign({}, state, {
        modalIsOpen: false
      })
    default:
      return state
  }
};

export default loginModal