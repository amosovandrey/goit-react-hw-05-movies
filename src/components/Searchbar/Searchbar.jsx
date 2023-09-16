import { Form, Input, SearchButton } from './Searchbar.styled';

const Searchbar = ({ handleSubmit, query }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="query" autoComplete="off" placeholder={query} />
      <SearchButton type="submit">search</SearchButton>
    </Form>
  );
};

export default Searchbar;
