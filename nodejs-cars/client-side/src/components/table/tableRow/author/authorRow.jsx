import React, { useEffect, useState } from "react";
import {
  makeStyles,
  TableRow,
  TableCell,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { AlertComponent } from "../../../components";

function AuthorRow(props) {
  const classes = useStyles();
  const [alertOpen, setAlertOpen] = useState(false);

  const { row } = props;

  return (
    <TableRow key={row.authorId} className={classes.row}>
      <TableCell>
        <Typography variant="h3">{row.name.toUpperCase()}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="h3">{row.superpower}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="h3">{new Date(row.end_of_an_era).getDate()}-{new Date(row.end_of_an_era).getMonth()}-{new Date(row.end_of_an_era).getFullYear()}(dd/mm/yyyy)</Typography>
      </TableCell>
      <TableCell align="right" style={{ width: 150 }}>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          // onClick={() => onRowClick(row.id)}
        >
          <Edit />
        </IconButton>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={() => {
            setAlertOpen(true);
          }}
        >
          <Delete />
        </IconButton>
        <AlertComponent
          open={alertOpen}
          handleClose={() => setAlertOpen(false)}
          // handleAction={() => handleDelete(row.profileId)}
          title="Delete item?"
          message="Are you sure you want to delete this item? This process cannot be undone."
          actionText="Yes, delete"
          closeText="No, cancel"
        />
      </TableCell>
    </TableRow>
  );
}

const useStyles = makeStyles((theme) => ({
  row: {
    cursor: "pointer",
  },
  profilePhoto: {
    width: "2rem",
    height: "2rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: 2000,
    boxShadow: "2px 0px 8px rgba(0,0,0, .1)",
  },
}));

export default AuthorRow;
