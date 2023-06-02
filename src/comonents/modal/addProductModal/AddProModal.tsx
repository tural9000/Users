import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import "./addProModal.scss";
import FormData from "../../form/FormData";
import { useForm, FormProvider } from 'react-hook-form';
import { IField } from "../../form/form.interface";
import {yupResolver} from '@hookform/resolvers/yup';


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

  
  // const {productStore} = useStores();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (data:any) => {
    setOpen(false);
  }

  return (
    <div >
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className="btn-added">
        Add New User  
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{marginTop: '3rem'}}>
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}>
          <div className='page__header'>
              <div className='page__title'>
                  {/* <h4>Add User</h4> */}
                  <h4>Create New User</h4>
              </div>
          </div>
        </BootstrapDialogTitle>
        <DialogContent dividers >
          {/* main field */}
          <FormData/>
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
