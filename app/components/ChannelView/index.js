/**
*
* ChannelView
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import MessageList from 'components/MessageList/Loadable';
import MessageComposer from 'components/MessageComposer/Loadable';

class ChannelView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { messages } = this.props.channel;
    return (
      <div>
        <MessageList messages={messages} />
        <MessageComposer />
      </div>
    );
  }
}

ChannelView.propTypes = {
  channel: PropTypes.object.isRequired,
};

export default ChannelView;
