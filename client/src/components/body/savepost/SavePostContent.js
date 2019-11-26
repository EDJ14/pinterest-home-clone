import React, { useState } from 'react';
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

const confirmSave = async (post, num) => {
  console.log(post, num, props);
  const res = await axios.post('/api/savepost', { post, num });
};

const SavePostContent = props => {
  const [loading, setLoading] = useState(0);
  const { post } = props;
  const { num } = props;
  return [
    <HeaderBox onClick={props => confirmSave(post, num, props.auth)}>
      Confirm Save
    </HeaderBox>,
    <PictureBox img={props.post[0].image_url} />,
    <Title>TITLETITLE</Title>
  ];
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(SavePostContent);
