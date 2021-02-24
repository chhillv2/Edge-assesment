
import React, { useState, useEffect } from "react";
import {
  makeStyles,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import { useActions } from "../../redux/actions";
import {
  PageNavComponent,
  UploadModal,
  ModalWrapper,
} from "../../components/components";

const AverageListingScreen = () => {
  const classes = useStyles();

  const { errorListing } = useActions();
  const error = useSelector((state) => state.errors);

  React.useEffect(() => {
    setTimeout(init, 500);
  }, []);

  const init = async () => {
    let { error } = await errorListing();
    if (error) console.log(error);
  };

  return (
    <div>
      <div className={classes.navWrapper}>
        <b>Error: { error }  </b>
      </div>
    </div>
  );
};
export default AverageListingScreen;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ff444b",
  },
  navWrapper: {
    marginBottom: "1rem",
    borderBottom: "1px solid #D8D8D8",
    paddingBottom: "1rem",
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },
}));