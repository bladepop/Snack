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
  padding: 15px;
  max-width: 800px;
  height: 100%;
  background: #ededed;
  
  display: flex;
  flex-direction: column;
`;

const MessageListWrapper = styled.div`
  display: flex;
  flex: 3 0px;
`;

const MessageComposerWrapper = styled.div`
  display: flex;
`;

class ChannelView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { messages } = this.props.channel;
    return (
      <ChannelWrapper>
        <MessageListWrapper>
          <MessageList messages={messages} />
        </MessageListWrapper>
        <MessageComposerWrapper>
          <MessageComposer />
        </MessageComposerWrapper>
      </ChannelWrapper>
    );
  }
}

ChannelView.propTypes = {
  channel: PropTypes.object.isRequired,
};

export default ChannelView;
