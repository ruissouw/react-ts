import { Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const PasswordInputWithEye = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputGroup>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        pr="4.5rem" // Adds space for the eye icon on the right side
      />
      <InputRightElement width="3rem" mr="1rem"> {/* Add margin-right */}
        <IconButton
          aria-label={showPassword ? "Hide password" : "Show password"}
          icon={showPassword ? <HiEyeOff /> : <HiEye />}
          onClick={togglePasswordVisibility}
          variant="link"
          size="sm"
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInputWithEye;
