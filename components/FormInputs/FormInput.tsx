import { Input, InputGroup, InputRightElement, Icon, FormControl } from '@chakra-ui/react';
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import { IconType } from 'react-icons';

type PropTypes = {
  placeholder: string;
  icon: IconType;
  inputType?: string;
  isInvalid?: boolean;
  register: UseFormRegisterReturn;
};

const FormInput = (props: PropTypes) => {
  const { placeholder, icon, inputType, isInvalid, register } = props;
  return (
    <FormControl isInvalid={isInvalid}>
      <InputGroup>
        <Input
          placeholder={placeholder}
          type={inputType}
          focusBorderColor="brand.100"
          bg="offwhite.100"
          borderWidth="1px"
          borderColor="gray.400"
          _placeholder={{ color: 'gray.500' }}
          {...register}
        />
        <InputRightElement>
          <Icon as={icon} color="gray.500" />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

FormInput.defaultProps = {
  inputType: 'text',
};

export default FormInput;
