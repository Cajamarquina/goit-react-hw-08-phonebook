import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/contactsSelectors';
import { setFilter } from '../../redux/contacts/filterSlice';
import { FiSearch } from 'react-icons/fi';
import { Container, SearchField } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectFilter);

  const handleSearchChange = evt => {
    dispatch(setFilter(evt.target.value.trim()));
  };

  return (
    <Container>
      <label htmlFor="filter-input">Find contacts by name</label>
      <SearchField
        value={filterName}
        type="text"
        onChange={handleSearchChange}
        id="filter-input"
      ></SearchField>
      <FiSearch />
    </Container>
  );
};