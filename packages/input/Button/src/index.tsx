import React from "react";
import Box from "@mui/material/Box";

export type ButtonProps = { name: string };

export default function Button({ name = "Hello" }: ButtonProps) {
  return <Wrapper>{name}</Wrapper>;
}

const Wrapper = ({ children }) => {
  return (
    <Box data-id="Button" sx={{}}>
      {children}
    </Box>
  );
};
