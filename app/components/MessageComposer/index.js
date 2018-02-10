/**
*
* MessageComposer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ComposerInput = styled.input`
  width: 100%;
  background: #d6d6d6;
  padding: 15px;
  color: #252525;
  border-radius: 10px;
`;

class MessageComposer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onSend(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <ComposerInput type="text" placeholder="Write a message..." onKeyPress={this.handleKeyPress} />
    );
  }
}

MessageComposer.propTypes = {
  onSend: PropTypes.func.isRequired,
};

export default MessageComposer;
