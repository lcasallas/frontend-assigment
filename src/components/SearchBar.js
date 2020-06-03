import React from 'react';
import styled from 'styled-components';

import FeatherIcon from 'feather-icons-react';

const Form = styled.form`
	display: flex;
	width: 300px;
`;

const ButtonSearch = styled.button`
	background-color: white;
	border: 1px solid white;
	border-top-left-radius: 10px;
	text-align: center;
	display: inline;
`;
const Input = styled.input`
	width: 100%;
	background-color: white;
	border: 1px solid white;
	border-bottom-right-radius: 10px;
	padding: 5px 8px;
	margin-left: 2px;
`;

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <ButtonSearch type='submit'>
        <FeatherIcon icon='search' color='#65b32e' />
      </ButtonSearch>
      <Input
        placeholder='¿Qué estás buscando?'
        value={value}
        onChange={onChange}
      />
    </Form>
  );
};

export default SearchBar;
