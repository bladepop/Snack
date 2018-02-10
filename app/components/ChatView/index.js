/**
*
* ChatView
*
*/

import React from 'react';
import styled from 'styled-components';

import ChannelContainer from 'containers/ChannelContainer/Loadable';


const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class ChatView extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ChatWrapper>
        <ChannelContainer />
      </ChatWrapper>
    );
  }
}

ChatView.propTypes = {

};

export default ChatView;
