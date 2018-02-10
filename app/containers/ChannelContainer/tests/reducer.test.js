
import { fromJS } from 'immutable';
import channelContainerReducer from '../reducer';

describe('channelContainerReducer', () => {
  it('returns the initial state', () => {
    expect(channelContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
