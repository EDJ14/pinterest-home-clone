import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

const BodyBan = styled.div`
  grid-column: 3 / -3;
  grid-row: 1 / 2;
  margin: 1rem 0;
  height: 15rem;
  display: flex;
  flex-direction: column;
`;

const UserWelcome = styled.h1`
  background-color: white;
  color: black;
  text-align: center;
  margin-bottom: 1rem;
`;

const CategoryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: calc(100% - 5rem);
  background-color: ${randomColor()};
`;

import { randomColor } from '../body/PostCard';

const FeaturedPosts = styled.div`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0.75rem;
  background-image: url(https://source.unsplash.com/random/${props =>
      props.img}5x${props => props.img}5);
  border-radius: 5px;
  text-align: center;
  position: relative;
  box-shadow: 0 0 3px #000;
`;

class BodyBanner extends Component {
  state = { tags: [] };

  async componentDidMount() {
    const res = await axios.get('/api/tags');
    const tags = res.data.slice(0, 5).map(cat => cat.tag_name);
    this.setState({ tags: tags });
  }

  renderContent() {
    if (this.state.length == 0) {
      return (
        <BodyBan>
          <UserWelcome>
            Hi {this.props.auth ? this.props.auth.username : 'Loading'} Your
            feed is made up of these topics
          </UserWelcome>
          <FeaturedPosts />
        </BodyBan>
      );
    }

    const posts = this.state.tags.map((cat, i) => (
      <FeaturedPosts key={cat} img={i}>
        <div style={{ position: 'absolute', bottom: '.5rem', left: '.5rem' }}>
          {cat}
        </div>
      </FeaturedPosts>
    ));

    return (
      <BodyBan>
        <UserWelcome>
          Hi {this.props.auth ? this.props.auth.username : 'Loading'}!! Your
          feed is made up of these topics
        </UserWelcome>
        <CategoryBox>{posts}</CategoryBox>
      </BodyBan>
    );
  }

  render() {
    return this.renderContent();
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(BodyBanner);
