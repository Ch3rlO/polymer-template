/**
 *
 * @param {*} payload => whatever in could be (Object,Array,String..etc)
 * @return {Object} With ActionType & the payload
 *
 */

export const addPost = (payload) => ({
  type: 'ADD_POST',
  payload,
})

export const search = (payload) => ({
  type: 'SEARCH',
  payload,
})
