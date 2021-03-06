import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useActions } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { CustomTable } from "../../components/components";

// HEAD CELLS
const headCells = [
  { id: "profilePicture", label: "Profile" },
  { id: "name", label: "Power" },
  { id: "End of an era", label: "End of an era" },
  { id: "Options", label: "Options" },
];

function isValueInField(value, list) {
  return list.toLowerCase().includes(value.toLowerCase());
}

const AuthorsListScreen = () => {
  const classes = useStyles();
  const { mostContactedlisting } = useActions();
  const data = useSelector((state) => state.authors);

  const [searchValue, setSearchValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);

  React.useEffect(() => {
    setTimeout(init, 500);
  }, []);
  const init = async () => {
    let { error } = await mostContactedlisting();
    if (error) console.log(error);
  };

  const applySearch = (row) => {
    if (searchValue !== "") {
      return isValueInField(searchValue, row.name);
    }
    return row;
  };

  const onSearchChange = (val) => {
    setSearchValue(val);
    console.log("valll", val)
  };
  const history = useHistory();

  return (
    <div>
      <div className={classes.navWrapper}>
        <TextField
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search Profile"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <CustomTable
        tableType="author"
        tableDate={data || []}
        headCells={headCells}
        defualtOrder="itemStatus"
        applySearch={applySearch}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
};
export default AuthorsListScreen;

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
