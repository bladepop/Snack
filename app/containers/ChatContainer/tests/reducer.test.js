
import { fromJS } from 'immutable';
import chatContainerReducer from '../reducer';

describe('chatContainerReducer', () => {
  it('returns the initial state', () => {
    expect(chatContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
