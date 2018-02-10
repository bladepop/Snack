/**
 *
 * Message
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  padding: 5px 5px 15px 5px;
  width: 100%;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;

`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px; 
  margin-right: 10px;
`;

const NameWrapper = styled.div`
  font-weight: bold;
  font-family: 'Roboto';
`;

const DateWrapper = styled.div`
  font-family: 'Roboto';
  font-size: 12px;
  color: gray;
  width: 140px;
  text-align: right;
  flex-shrink: 0;
`;

const ContentWrapper = styled.div`
  font-family: 'Roboto';
`;

const ProfileImageWrapper = styled.div`
  background-image: url("https://yt3.ggpht.com/-JOyKPLnOtAc/AAAAAAAAAAI/AAAAAAAAAAA/fOs3fSwsp0I/s900-c-k-no-mo-rj-c0xffffff/photo.jpg");  
  border-radius: 50%;
  height: 60px;
  width: 60px;   
  background-size: cover;
  flex-shrink: 0;   
`;


class Message extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { author, content, timestamp } = this.props;
    return (
      <MessageWrapper>
        <BodyWrapper>
          <ProfileImageWrapper />
          <TextWrapper>
            <NameWrapper>{author}</NameWrapper>
            <ContentWrapper>
              {content}
            </ContentWrapper>
          </TextWrapper>
        </BodyWrapper>
        <DateWrapper>{moment(timestamp).fromNow()}</DateWrapper>
      </MessageWrapper>
    );
  }
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default Message;
