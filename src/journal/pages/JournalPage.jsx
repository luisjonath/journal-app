import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {

  const dispatch = useDispatch()

  const {isSaving, active} = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {/*  <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptas. Impedit doloribus beatae cupiditate tempora unde vitae soluta quo accusantium obcaecati, nam officia sapiente voluptatum consequatur pariatur minus id veniam.</Typography> */}

      {
        (!!active)
        ? <NoteView />
        : <NothingSelectedView />
      }

      {/* <NothingSelectedView /> */}

       {/* <NoteView /> */}

      <IconButton
        onClick={onClickNewNote}
        size="large"
        disabled={isSaving}
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
