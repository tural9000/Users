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

import FormData from "../../form/FormData";
import { useForm, FormProvider } from 'react-hook-form';
import { IField } from "../../form/form.interface";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAddUserMutation } from "../../../store/api/users.api";

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
// validate yup
const schema = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  phone: yup.string().required()
})

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [addUser, { isLoading }] = useAddUserMutation();
  // const {productStore} = useStores();

  const form = useForm<IField>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      age: 0,
      gender: "",
      phone: "",
      city: "",
    },
  });

  const onSubmit = (data: IField) => {
    const newData = {
      name: {
        first: data.name,
        last: data.lastName,
      },
      email: data.email,
      age: data.age,
      city: data.city,
      phone: data.phone,
      gender: data.gender,
    };
    handleSave(true)
    setTimeout(() => {
      addUser(newData);
    }, 1000);
    form.reset()
  };

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
          {/* main field */}
          {/* <FormData handleSave={handleSave}/> */}
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
               <FormData />
            </form> 
          </FormProvider>
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
