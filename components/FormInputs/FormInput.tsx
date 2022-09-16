import { Input, InputGroup, InputRightElement, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

type PropTypes = {
  placeholder: string;
  icon: IconType;
  inputType?: string;
};

const FormInput = (props: PropTypes) => {
  const { placeholder, icon, inputType } = props;
  return (
    <InputGroup>
      <Input
        placeholder={placeholder}
        type={inputType}
        focusBorderColor="brand.100"
        bg="offwhite.100"
        borderWidth="1px"
        borderColor="gray.400"
        _placeholder={{ color: "gray.500" }}
      />
      <InputRightElement>
        <Icon as={icon} color="gray.500" />
      </InputRightElement>
    </InputGroup>
  );
};

FormInput.defaultProps = {
  inputType: "text",
};

export default FormInput;
