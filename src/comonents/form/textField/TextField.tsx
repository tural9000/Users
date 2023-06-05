// import { FormControl } from '@mui/base'
import { Theme } from "@mui/material/styles";
import MuiFormControl from "@mui/material/FormControl";
import styled from "@mui/material/styles/styled";
import { TextField, TextFieldProps } from "@mui/material";
import { FieldError, FieldValues, UseControllerProps } from "react-hook-form";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../../../utils/addErrorIntofield";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import InputMask from "react-input-mask";

type Props<T extends FieldValues> = Omit<TextFieldProps, "inputRef" | "name"> &
  UseControllerProps<T> & {
    name: string;
    errors: any;
  };

// interface Props<T> extends UseControllerProps<T> {
//   error: FieldError | undefined;
//   // control:
// }

const FormControl = styled(MuiFormControl)<{ myProp?: string }>(
  ({ theme }) => ({
    // color: theme.palette.nav.links,
    borderRadius: 30,
    width: "100%",
  })
);

const TextFields = <T extends FieldValues>({
  name,
  control,
  errors,
  ...props
}: Props<T>) => {
  // console.log('test', field);
  return (
    <FormControl fullWidth /* hiddenLabel  */ sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        // rules={{ required: true }}
        render={({ field }) => (
          <TextField
            // required
            {...props}
            {...field}
            // variant = "filled"
            {...addErrorIntoField(errors[name])}
          />
        )}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
};

// inputmask


export default TextFields;
