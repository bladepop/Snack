/*
 *
 * ChannelContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  SEND_MESSAGE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    payload: {
      message,
    },
  };
}
