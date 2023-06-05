import { Avatar, Box, Button, FormControl, FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup, Typography } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import TextFields from "../../comonents/form/textField/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { phoneRegEx } from "../../utils/addErrorIntofield";
import { useAddUserMutation } from "../../store/api/users.api";
import "./index.scss";
import TextFieldMask from "../../comonents/form/textField/TextFieldMask";


const schema = yup.object({
  firstName: yup.string().required('firstName is required'),
  lastName: yup.string().required('LastName is required'),
  email: yup.string().required('Email is required').email(),
  age: yup.number().positive().integer().max(150).required('Age is required'),
  phone: yup.string().required('Mobile is required')
})


export interface IFormData{
  fullName: string,
  email: string,
  country: string,
  mobile: string,
  password: string,
  confirPassword: string,
  privacy: boolean
}
const AddForm = ({handleSave}: {handleSave: any}) => {
  const [addUser, { isLoading }] = useAddUserMutation();
  const {handleSubmit, formState:{errors}, control, reset} = useForm<IField>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      gender: "",
      phone: "",
      city: "",
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: IField) => {
    const newData = {
      name: {
        first: data.firstName,
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
    reset()
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: "1rem",
        alignItems: "center",
        color: 'blue',
        // border: 'solid red'
      }}
    >
  <Typography component="h1" sx={{fontSize:"2rem"}}>Add new user</Typography>
      {/* Form */}
      <Box component="form" sx={{ width: "100%", mt: "2rem" }} onSubmit={handleSubmit(onSubmit)} noValidate>
           <TextFields control={control} name="firstName" errors={errors} label="Fullname" />
           <TextFields control={control} name="lastName" errors={errors} label="Lastname" />
           <TextFields control={control} name="email" errors={errors} label="Email" />
           <TextFields control={control} name="age" errors={errors} label="Age" /> 
           <TextFieldMask  control={control} name="phone" errors={errors} label="Mobile Phone"/>
           <TextFields control={control} name="city" errors={errors} label="City" />
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female"/>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <div className='btns'>
          <Button
            type="submit"
            variant="contained"
            // style={{ }}
            sx={{backgroundColor: "#ff9f43", p: '10px 30px', fontSize: '1rem'}}
          >
            Add user
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default AddForm;
