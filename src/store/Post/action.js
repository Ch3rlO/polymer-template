/**
 *
 * @param {*} payload => whatever in could be (Object,Array,String..etc)
 * @return {Object} With ActionType & the payload
 *
 */

export const addPost = (state, payload) => ({
  type: 'ADD_POST',
  payload,
});
