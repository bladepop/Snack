/*
 *
 * ChannelContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SEND_MESSAGE,
} from './constants';

const initialState = fromJS({
  name: 'My Channel',
  messages: [
    { author: 'Anna', content: 'Hello!', timestamp: Date.now(), id: 1 },
    { author: 'Daniel', content: 'Sup?', timestamp: Date.now() + 5, id: 2 },
    { author: 'Anna', content: 'The sky!', timestamp: Date.now() + 10, id: 3 },
  ],
});

function channelContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return state.updateIn(['messages'], (messages) => messages.push({ author: 'New Guy', content: action.payload.message, timestamp: Date.now(), id: messages.count() + 1 }));
    default:
      return state;
  }
}

export default channelContainerReducer;
