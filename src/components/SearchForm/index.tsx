import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";

const SearchForm = () => {
  return (
    <InputGroup _focusWithin={{
        border: "none",
    }}>
      <Input
        type="text"
        placeholder="Busque por..."
        _focus={{
          border: "solid 2px #d8d8d8",
        }}
      />
      <InputRightElement>
        <IconButton
          colorScheme="orange"
          aria-label="Search database"
          icon={<BiSearchAlt />}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchForm;
