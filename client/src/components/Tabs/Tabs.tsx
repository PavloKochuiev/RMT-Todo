import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Tasks } from "../Tasks/Tasks";
import { InboxIcon } from "../../assets/InboxIcon";

export const Tabs = () => {
  const [project, setProject] = useState("");

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box
        sx={{
          background: "grey",
          flexGrow: 1,
          height: "92vh",
          backgroundColor: "#FAFAFA",
          paddingLeft: "80px",
          paddingTop: "30px",
          paddingRight: "40px",
        }}
      >
        <Box
          onClick={() => setProject("inbox")}
          sx={{
            display: "flex",
            column: "row",
            cursor: "pointer",
            width: "100%",
            backgroundColor: `${project === "inbox" ? "#EDEDED" : "#FAFAFA"}`,
            borderRadius: "5px",
            padding: "5px",
            "&:hover": { backgroundColor: "#EDEDED" },
            transition: "0.2s",
          }}
        >
          <InboxIcon />
          <Typography
            sx={{
              display: "flex",
              fontSize: "14px",
              marginLeft: "4px",
              alignItems: "center",
            }}
          >
            Inbox
          </Typography>
        </Box>
      </Box>
      <Box sx={{ background: "#FFFFFF", flexGrow: 8, height: "92vh" }}>
        <Tasks project={project} />
      </Box>
    </Box>
  );
};
