/**
*
* ChannelView
*
*/

import React from 'react';
// import styled from 'styled-components';

import MessageList from 'components/MessageList/Loadable';
import MessageComposer from 'components/MessageComposer/Loadable';

const messages = [
  { author: 'Anna', content: 'Hello!', timestamp: Date.now(), id: 1 },
  { author: 'Daniel', content: 'Sup?', timestamp: Date.now() + 5, id: 2 },
  { author: 'Anna', content: 'The sky!', timestamp: Date.now() + 10, id: 3 },
];

class ChannelView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <MessageList messages={messages} />
        <MessageComposer />
      </div>
    );
  }
}

ChannelView.propTypes = {

};

export default ChannelView;
