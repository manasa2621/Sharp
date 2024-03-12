import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const StyledFooter = styled.div`
  background-color: #2596be;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body1" color="white" align="center">
        © SHARP Software Development India Pvt. Ltd. All Rights Reserved.
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
