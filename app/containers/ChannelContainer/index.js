/**
 *
 * ChannelContainer
 *
 */

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import ChannelView from 'components/ChannelView/Loadable';

import makeSelectChannelContainer from './selectors';
import reducer from './reducer';
import saga from './saga';


const mapStateToProps = createStructuredSelector({
  channel: makeSelectChannelContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'channelContainer', reducer });
const withSaga = injectSaga({ key: 'channelContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ChannelView);
