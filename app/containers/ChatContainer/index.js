/**
 *
 * ChatContainer
 *
 */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import ChatView from 'components/ChatView/Loadable';

import makeSelectChatContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  chatcontainer: makeSelectChatContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'chatContainer', reducer });
const withSaga = injectSaga({ key: 'chatContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ChatView);
