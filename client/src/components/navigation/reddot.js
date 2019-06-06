import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Reddot = styled.span`
  background-color: rgb(206, 24, 38);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  position: absolute;
  right: 0.35rem;
  text-align: center;
  color: white;
`;

function RedDot(props) {
  return <Reddot>{props.postNumber}</Reddot>;
}

function mapStateToProps({ postNumber }) {
  return { postNumber };
}

export default connect(mapStateToProps)(RedDot);
