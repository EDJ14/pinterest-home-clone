import React, { Component } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const Search = styled.input`
  type: text;
  margin: 0 2rem;
  width: 66rem;
  height: 4.5rem;
  border: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    padding-left: 4.5rem;
  }
  :-ms-input-placeholder {
    padding-left: 4, 5rem;
  }

  &:focus {
    outline: none;
    border: 3px solid rgb(109, 163, 249);
    border-radius: 1rem;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 4rem;
  border: none;
  background-color: white;
  transform: scale(1.5);
`;

class HeaderSearch extends Component {
  state = { input: '' };

  handleChange = e => {
    this.setState({ input: e.target.value });
    console.log('changed');
  };

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Search
          onChange={e => this.handleChange(e)}
          value={this.state.input}
          placeholder="Search"
        />
        <SearchButton>
          <MdSearch />
        </SearchButton>
      </div>
    );
  }
}

export default HeaderSearch;
