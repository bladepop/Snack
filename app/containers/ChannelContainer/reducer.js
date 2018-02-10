/*
 *
 * ChannelContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  messages: [
    { author: 'Anna', content: 'Hello!', timestamp: Date.now(), id: 1 },
    { author: 'Daniel', content: 'Sup?', timestamp: Date.now() + 5, id: 2 },
    { author: 'Anna', content: 'The sky!', timestamp: Date.now() + 10, id: 3 },
  ],
});

function channelContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default channelContainerReducer;
