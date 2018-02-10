import { createSelector } from 'reselect';

/**
 * Direct selector to the chatContainer state domain
 */
const selectChatContainerDomain = (state) => state.get('chatContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ChatContainer
 */

const makeSelectChatContainer = () => createSelector(
  selectChatContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectChatContainer;
export {
  selectChatContainerDomain,
};
