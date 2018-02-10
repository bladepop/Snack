/**
*
* ChannelView
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MessageList from 'components/MessageList/Loadable';
import MessageComposer from 'components/MessageComposer/Loadable';

const ChannelWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  height: 100%;
  background: #ededed;
  
  display: flex;
  flex-direction: column;
`;

const MessageListWrapper = styled.div`
  display: flex;
  flex: 3 0px;
  padding: 15px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const MessageComposerWrapper = styled.div`
  display: flex;
  padding: 10px 15px;
`;

const ChannelHeader = styled.div`
  display: flex;
  background: #bddbd4;
  padding: 15px;
`;

class ChannelView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { messages, name } = this.props.channel;
    const { sendMessage } = this.props;
    return (
      <ChannelWrapper>
        <ChannelHeader>
          <h2>{name}</h2>
        </ChannelHeader>
        <MessageListWrapper>
          <MessageList messages={messages} />
        </MessageListWrapper>
        <MessageComposerWrapper>
          <MessageComposer onSend={sendMessage} />
        </MessageComposerWrapper>
      </ChannelWrapper>
    );
  }
}

ChannelView.propTypes = {
  channel: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default ChannelView;
