let nextContactId = 0
export const addContact = (name,number) => {
  return {
    type: 'ADD_CONTACT',
    id: nextContactId++,
    name,
    number
  }
}

export const deleteContact = (id) => {
  return {
    type: 'DELETE_CONTACT',
    id
  }