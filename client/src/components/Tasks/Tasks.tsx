import React, { FC } from "react";
import { Box } from "@mui/material";

type Props = {
  project: string;
};

export const Tasks: FC<Props> = ({ project }) => {
  return (
    <Box
      sx={{ paddingLeft: "150px", paddingTop: "30px", paddingRight: "150px" }}
    >
      Inbox
    </Box>
  );
};
