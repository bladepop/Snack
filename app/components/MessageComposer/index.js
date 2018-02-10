/**
*
* MessageComposer
*
*/

import React from 'react';
import styled from 'styled-components';

const ComposerInput = styled.input`
  width: 100%;
  background: #d6d6d6;
  padding: 15px;
  color: #252525;
  border-radius: 10px;
`;

class MessageComposer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ComposerInput type="text" placeholder="Write a message..." />
    );
  }
}

MessageComposer.propTypes = {

};

export default MessageComposer;
