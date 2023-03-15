import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*  <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptas. Impedit doloribus beatae cupiditate tempora unde vitae soluta quo accusantium obcaecati, nam officia sapiente voluptatum consequatur pariatur minus id veniam.</Typography> */}

      <NothingSelectedView />

       {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { background: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>
  );
};
