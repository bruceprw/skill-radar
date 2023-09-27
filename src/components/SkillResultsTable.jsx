import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const columns = [
  { field: 'sn', headerName: "Service Number", width: 130},
  { field: 'FirstName', headerName: 'First name', width: 130 },
  { field: 'Surname', headerName: 'Last name', width: 130 },
  { field: 'Email', headerName: "Email", width: 130},
];


  const rows = [
    {
        id: 1,
        sn: "6001656",
        FirstName: "Samuel",
        Surname: "Kirwin",
        Email: "db@skirwin.com",
        Rank: "Mr"
    },
    {
        id: 2,
        sn: "1",
        FirstName: "Test",
        Surname: "User",
        Email: "test@email.com",
        Rank: "Mr"
    },
    {
        id: 3,
        sn: "12345678",
        FirstName: "Luke",
        Surname: "Dale",
        Email: "ld@email.com",
        Rank: "Captain"
    }
]

export default function SkillResultsTable({passResults}) {
  const [open, setOpen] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSendClose = () => {
    setOpen(false);
    setSnackOpen(true);
  };

  const [hide, setHide] = useState(false);
  
  const onRowsSelectionHandler = (ids) => {
  const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
  if (selectedRowsData.length > 0) {
    setHide(true);
  }
  else {
    setHide(false);
  }
};
const action = (
  <React.Fragment>
    <Button color="secondary" size="small" onClick={handleClose}>
    </Button>
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </React.Fragment>
);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={passResults.map((result, idx) => ({...result, id: idx}))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
      />
      <div>
        { hide && (<Button
                  variant='contained'
                  onClick={handleClickOpen}
                  >
        Email tasking chain of selected users
      </Button>)}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Tasking Chain</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your tasking request
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Message"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSendClose}>Send tasking request</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
        message="Tasking request sent"
        action={action}
      />
      
      </div>
    </div>
  );
}