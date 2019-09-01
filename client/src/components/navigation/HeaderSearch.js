import React, { Component } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { IconContext } from 'react-icons';

import SearchFocus from './SearchFocus';

const Search = styled.input`
  type: text;
  width: 70rem;
  padding-left: 4.5rem;
  font-size: 1.75rem;

  @media (max-width: 930px) {
    width: 60rem;
  }

  @media (max-width: 768px) {
    width: 20rem;
  }

  height: 3.75rem;
  border: none;
  border-radius: 1rem;
  background-color: rgb(227, 229, 232);

  &:focus {
    outline: none;
    border: 3px solid rgb(109, 163, 249);
    text-indent: 4.2rem;
    padding-left: 0;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0.75rem;
  left: 2rem;
  border: none;
  background-color: rgb(227, 229, 232);
  transform: scale(1.25);
`;

const DropDown = styled.div`
  top: 4rem;
`;

class HeaderSearch extends Component {
  state = { input: '', showDropDown: false };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  onFocus = () => {
    this.setState({ showDropDown: true });
  };

  renderDropDown = () => {
    if (this.state.showDropDown) {
      return (
        <DropDown>
          <SearchFocus
            closeModal={() => this.setState({ showDropDown: false })}
          />
        </DropDown>
      );
    }
  };

  render() {
    return (
      <div style={{ position: 'relative', marginRight: '2.5rem' }}>
        <Search
          onChange={e => this.handleChange(e)}
          value={this.state.input}
          placeholder="Search"
          onFocus={this.onFocus}
        />
        <SearchButton>
          <IconContext.Provider
            value={{
              color: 'grey',
              size: '2rem',
              width: '3rem'
            }}
          >
            <MdSearch />
          </IconContext.Provider>
        </SearchButton>
        {this.renderDropDown()}
      </div>
    );
  }
}

export default HeaderSearch;
