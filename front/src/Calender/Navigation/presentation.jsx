import React, { useContext } from 'react';

import {
  IconButton,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core";

import dayjs from 'dayjs';

import DehazeIcon from '@material-ui/icons/Dehaze';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";

import {
  YearContext,
  MonthContext
} from '../calender_hooks';

const StyleToolbar = withStyles({
  root: { padding: "0" }
})(Toolbar);

const StyledTypography = withStyles({
  root: { margin: "0 30px 0 10px"}
})(Typography);

const Navigation = () => {

  const year = useContext(YearContext);
  const month = useContext(MonthContext);

  return(
    <Toolbar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <IconButton>
        <EventNoteIcon />
      </IconButton>
      <StyledTypography color="textSecondary" variant="h5" component="h1">
        カレンダー
      </StyledTypography>
      <IconButton size="small">
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small">
        <ArrowForwardIos />
      </IconButton>
    </Toolbar>
  )
}

export default Navigation;
