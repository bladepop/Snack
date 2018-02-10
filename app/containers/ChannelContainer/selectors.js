import { createSelector } from 'reselect';

/**
 * Direct selector to the channelContainer state domain
 */
const selectChannelContainerDomain = (state) => state.get('channelContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ChannelContainer
 */

const makeSelectChannelContainer = () => createSelector(
  selectChannelContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectChannelContainer;
export {
  selectChannelContainerDomain,
};
