import useEffect from 'react';
import { Box, Typography } from '@mui/material';

const Users = () => {
  return (
    <Box
        sx={{
            height: 400,
            width: '100%'
        }}
    >
        <Typography
            variant='h3'
            component='h3'
            sx={{textAlign: 'center', mt:3, mb:3}}
         >
            Manage Users
         </Typography>
         <DataGrid
    </Box>
  )
}

export default Users