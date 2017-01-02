const initialState = [{name:'Yael Bercow',number:'3475068241'}];

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return state
    case 'DELETE_CONTACT': 
        return state
    default:
      return state
  }
}

export default contacts