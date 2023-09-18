import React, { ChangeEventHandler } from "react";

import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";

const CustomSearch = ({
  onChange,
  value,
}: {
  onChange: any;
  value: string;
}) => {
  return (
    <InputGroup borderRadius={"md"} borderWidth="1px">
      <InputLeftAddon children="🔍" borderRadius="sm" bg="none" border="none" />
      <Input
        border="none"
        type="text"
        placeholder="Start typing..."
        borderRadius="sm"
        value={value}
        onChange={onChange}
        _focus={{
          outline: "none",
        }}
        data-cy="input-value"
      />
    </InputGroup>
  );
};

export default CustomSearch;
