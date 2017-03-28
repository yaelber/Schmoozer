const initialState = [];

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      let newContacts = state.concat([action.contact])
      console.log(action)
      return newContacts
    case 'DELETE_CONTACT': 
        return state
    default:
      return state
  }
}

export default contacts