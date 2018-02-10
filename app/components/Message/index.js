/**
*
* Message
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import moment from 'moment';

class Message extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { author, content, timestamp } = this.props;
    return (
      <div>
        <div>
          <b>{author} </b>
          <span>{moment(timestamp).fromNow()}</span>
        </div>
        <div>
          {content}
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default Message;
