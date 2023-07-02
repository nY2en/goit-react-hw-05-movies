import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input value={query} onChange={handleInputChange} />
      <Button>Search</Button>
    </Form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
