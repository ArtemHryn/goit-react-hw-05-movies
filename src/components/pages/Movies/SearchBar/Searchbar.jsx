import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { SearchBarInput, SearchForm, SearchFormButton, SearchFormButtonLabel } from './SearchBar.styled';

export const SearchBar = ({ onFormSubmit }) => {
  const [search, setSearch] = useState('');
  const onChange = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
      e.preventDefault();
      onFormSubmit(search)
      setSearch('')
  };
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchBarInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search Movie"
        value={search}
        onChange={onChange}
      />
      <SearchFormButton type="submit">
        <FcSearch style={{ width: 30, height: 30 }} />
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>
    </SearchForm>
  );
};
