import { Stack, Button, TextField, Grid } from "@mui/material";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { IField } from "./form.interface";
import styles from "./index.module.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useAddUserMutation } from "../../store/api/users.api";
import InputMask from "react-input-mask";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';


const FormData = () => {
  const [addUser, { isLoading }] = useAddUserMutation();
  // const {} = useFormContext()

  const schema = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    phone: yup.number().required()
  })

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
  
  const { register, handleSubmit, formState: {errors}, control, watch } = form;

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
    setTimeout(() => {
      addUser(newData);
    }, 2000);
    if (data) {
    }
  };
  return (
    <div className={styles.f}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={400}>
          <TextField
            label="Name"
            type="text"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="LastName"
            type="text"
            {...register("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
           <TextField
          label="Email"
          type="email"
          // onBlur={item => onBlur}
          {...register("email", {
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter valid email",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
         />

          <TextField
            label="Age"
            type="number"
            {...register("age")}

            error={!!errors.age}
            helperText={errors.age?.message}
          />
           <FormControl fullWidth={false} sx={{ mb: 6 }}>
            <Controller
              control={control}
              name='phone'
              defaultValue=""
              render={({ field }: {field:any}) => (
                <InputMask
                  {...field}
                  maskChar=""
                  mask="+\9\9\4 (99) 999 99 99"
                  label='Phone'
                  variant="outlined"
                  fullWidth={true}
                >
                  {(inputProps:any) => 
                  <TextField
                      {...inputProps}
                     
                      // error={!!errors.phone}
                      // helperText={errors.phone?.message} 
                      />}
                </InputMask>
              )}
            />
          </FormControl>
          <TextField label="City" type="text" {...register("city")} />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Stack>
        <div className={styles.btns}>
          <Button
            type="submit"
            /* variant="contained" */ style={{ backgroundColor: "#ff9f43" }}
          >
            Save changes
          </Button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default FormData;