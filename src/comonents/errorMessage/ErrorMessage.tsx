import img from './error.gif';
import { Box, Typography} from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error'

const ErrorMessage = ({message}:{message: any}) => {
    return (
        // <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}  src={img} alt="Error"/>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            mt: '6px'
        }}>
            <ErrorIcon color="error" sx={{width: "20px"}}/>
            <Typography color="error.main" variant='h6' fontSize='14px'>
                {message}
            </Typography>
        </Box>
    )
}

export default ErrorMessage;