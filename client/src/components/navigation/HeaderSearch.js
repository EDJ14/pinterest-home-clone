import React, { Component } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const Search = styled.input`
  type: text;
  margin: 0 2rem;
  width: 66rem;
  height: 3.75rem;
  border: none;
  border-radius: 1rem;
  background-color: rgb(227, 229, 232);

  ::placeholder,
  ::-webkit-input-placeholder {
    padding-left: 3.85rem;
  }
  :-ms-input-placeholder {
    padding-left: 3.85rem;
  }

  &:focus {
    outline: none;
    border: 3px solid rgb(109, 163, 249);
    text-indent: 3.5rem;

    &::placeholder {
      padding: 0;
    }
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 1.15rem;
  left: 4rem;
  border: none;
  background-color: rgb(227, 229, 232);
  transform: scale(1.25);
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
