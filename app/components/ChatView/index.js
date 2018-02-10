/**
*
* ChatView
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';

import ChannelContainer from 'containers/ChannelContainer/Loadable';

import messages from './messages';

class ChatView extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ChannelContainer />
      </div>
    );
  }
}

ChatView.propTypes = {

};

export default ChatView;
