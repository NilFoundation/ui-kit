import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, Form, Button } from 'react-bootstrap';

const inputSearchSize = {
  SM: 'sm',
  LG: 'lg'
}

const InputSearch = ({ placeholder, value, defaultValue, onChange, onSearch, ...props }) => {
  const [val, setVal] = React.useState(value || defaultValue);

  const handleOnSearch = () => {
    onSearch(val);
  }

  const handleOnChange = (event) => {
    setVal(event.target.value);
    onChange(event);
  }

  const handleOnKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleOnSearch();
    }
  }

  return (
    <InputGroup className="mb-3" {...props}>
      <Form.Control
        placeholder={placeholder}
        type="search"
        value={val}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
      <Button
        style={{ borderColor: '#ced4da' }}
        variant="outline-secondary"
        className="input-search-button"
        onClick={handleOnSearch}
      >
        <i className="bi bi-search"></i>
      </Button>
    </InputGroup>
  );
};

InputSearch.defaultProps = {
  placeholder: 'Search...',
  size: undefined,
  value: '',
  defaultValue: '',
  onChange: () => { },
  onSearch: () => { },
};

InputSearch.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.values(inputSearchSize)),
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

export default InputSearch;
export { InputSearch };