import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import "./addProModal.scss";
import { useAddUserMutation } from "../../../store/api/users.api";
import AddForm from "../../../pages/addForm/AddForm";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other} >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};


export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [addUser, { isLoading }] = useAddUserMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (data:boolean) => {
    setOpen(false);
  }

  return (
    <div >
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="btn-added"
        
      >
        Add New User  
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{marginTop: '3rem'}}

        
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <div className='page__header'>
              <div className='page__title'>
                  <h4>Create New User</h4>
              </div>
          </div>
        </BootstrapDialogTitle>
        <DialogContent dividers >
          <AddForm handleSave={handleSave}/>
          
        </DialogContent>
        <DialogActions  style={{padding: '12px'}}>
          {/* <Button autoFocus onClick={handleSave} className="action" >
            Save changes
          </Button> */}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
