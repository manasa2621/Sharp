import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const StyledHeader = styled.div`
  background-color: #2596be;
  padding: 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Typography variant="h4" color="white" align="center">
        BookMyDesk
      </Typography>
    </StyledHeader>
  );
};

export default Header;
