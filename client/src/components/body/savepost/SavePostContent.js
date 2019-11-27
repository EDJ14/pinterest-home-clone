import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';

const HeaderBox = styled.button`
  grid-row: 1;
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 4rem;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const PictureBox = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / 3;
  background-color: red;
  border-radius: 4%;
  background-image: url(${props => props.img});
  background-size: cover;
`;

const Title = styled.h1`
  grid-row: 2 / 3;
  grid-column: 3 / -1;
`;

const GrayCircle = styled.div`
  width: min-content;
  background-color: gray;
  border-radius: 50%;
`;

const confirmSave = async (post, num, user) => {
  console.log(post, num, user);
  const res = await axios.post('/api/savepost', { post, num, user });
};

const SavePostContent = props => {
  const { post } = props;
  const { num } = props;
  const { auth } = props;
  console.log('props', props);
  return [
    <HeaderBox onClick={() => confirmSave(post, num, auth)}>
      {props.auth == undefined ? 'Sign In to Save' : 'Confirm Save'}
    </HeaderBox>,
    <PictureBox img={props.post[0].image_url} />,
    <Title>TITLETITLE</Title>
  ];
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(SavePostContent);
