/**
*
* MessageList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Message from 'components/Message/Loadable';

const MessagesListWrapper = styled.div`
  width: 100%;
`;


class MessageList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { messages } = this.props;
    return (
      <MessagesListWrapper>
        { messages.map((message) => <Message {...message} key={message.id} />) }
      </MessagesListWrapper>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;
