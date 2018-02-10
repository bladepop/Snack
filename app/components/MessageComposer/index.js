/**
*
* MessageComposer
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class MessageComposer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <input type="text" placeholder="Write a message..." />
      </div>
    );
  }
}

MessageComposer.propTypes = {

};

export default MessageComposer;
