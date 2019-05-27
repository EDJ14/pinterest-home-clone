import React, { Component } from 'react';
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
  text-align: center;
  margin-bottom: 1rem;
`;

const CategoryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: calc(100% - 5rem);
`;

const FeaturedPosts = styled.div`
  color: red;
  text-transform: uppercase;
  margin: 0.75rem;
  background-image: url(https://source.unsplash.com/random/75x75);
  border-radius: 5px;
  text-align: center;
  position: relative;
  box-shadow: 0 0 3px #000;
`;

class BodyBanner extends Component {
  state = { categories: [] };

  async componentDidMount() {
    const res = await axios.get('/api/categories');
    const cats = res.data.slice(0, 5).map(cat => cat.category_name);
    this.setState({ categories: cats });
  }

  renderContent() {
    if (this.state.length == 0) {
      return (
        <BodyBan>
          <UserWelcome>
            Hi Eddie! Your feed is made up of these topics
          </UserWelcome>
          <FeaturedPosts />
        </BodyBan>
      );
    }

    const posts = this.state.categories.map(cat => (
      <FeaturedPosts>
        <div style={{ position: 'absolute', bottom: '.5rem', left: '.5rem' }}>
          {cat}
        </div>
      </FeaturedPosts>
    ));

    return (
      <BodyBan>
        <UserWelcome>
          Hi Eddie! Your feed is made up of these topics
        </UserWelcome>
        <CategoryBox>{posts}</CategoryBox>
      </BodyBan>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default BodyBanner;
