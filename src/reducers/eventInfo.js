const eventInfo = (state={}, action) => {
  switch (action.type) {
    case 'UPDATE_EVENT_INFO':
      return action.eventInfo
    default:
      return state
  }
}

export default eventInfo