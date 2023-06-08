import { Theme } from "@mui/material/styles";
import MuiFormControl from "@mui/material/FormControl";
import styled from "@mui/material/styles/styled";
import { TextField, TextFieldProps, InputAdornment } from "@mui/material";
import { FieldError, FieldValues, UseControllerProps } from "react-hook-form";
import { Controller } from "react-hook-form";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import InputMask from "react-input-mask";

type Props<T extends FieldValues> = Omit<TextFieldProps, "inputRef" | "name"> &
  UseControllerProps<T> & {
    name: string;
    errors: any;
  };

const FormControl = styled(MuiFormControl)<{ myProp?: string }>(
  ({ theme }) => ({
    // color: theme.palette.nav.links,
    borderRadius: 30,
    width: "100%",
  })
);

const TextFieldMask = <T extends FieldValues>({
  name,
  control,
  errors,
  ...props
}: Props<T>) => {
  // console.log('test', field);
  return (
    <FormControl fullWidth={false} sx={{ mb: 6 }}>
      <Controller
        control={control}
        name={name}
        // defaultValue=""
        render={({ field }: { field: any }) => (
          <InputMask
            {...field}
            maskChar=""
            mask="+\9\9\4 (99) 999-99-99"
            // mask="(99) 999 99 99" // inputProps yazsaq bu cur yaza bilerik 994 staer olaraq qoyuruq
            label="Phone"
            variant="outlined"
            fullWidth={true}
          >
            {(inputProps:any) => (
              <TextField
                {...inputProps}
                label="Phone Number"
                variant="outlined"
                // margin="normal"
                // InputProps={{
                //   ...inputProps,
                //   startAdornment: (
                //     <InputAdornment position="start">994</InputAdornment>),
                // }}
              />
            )}
          </InputMask>
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
};

export default TextFieldMask;
