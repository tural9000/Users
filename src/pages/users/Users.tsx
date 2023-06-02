import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  Button  from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import styles from './users.module.scss'
import CustomizedDialogs from '../../comonents/modal/addProductModal/AddProModal';
import { Link } from 'react-router-dom';
import { useGetAllUsersQuery} from '../../store/api/api';
import { useDeleteUserMutation } from '../../store/api/users.api';
import Spinner from '../../comonents/spinner/Spinner';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
// import { fetchUsers } from './../../store/user/user.action';


function createData(
  id: number,
  name: string,
  email: string,
  age: number,
) {
  return { id, name, email, age};
}



export default function BasicTable() {
  // data in kesh
  const{data, isLoading, isError} = useGetAllUsersQuery('')
  const [deleteUser] = useDeleteUserMutation()

  // data in global state
  const {users} = useTypedSelector(state => state.users)
  const {fetchUsers} = useActions()
  // console.log('test4', users)

   React.useEffect(() => {
    fetchUsers()
  }, []);

  const rows = data?.map((item:any, idx:any) => {
    const id = item.id
    const name = `${item.name.first} ${item.name.last}`
    const email = item.email
    const age = item.age
    // const {id, name, email, age} = item
    return createData( id, name, email, age)
  })

  // delete user function
  const userDelete = (id: number) => {
      deleteUser(id)
  }

  if(isLoading) return <Spinner/>
  return (
    <div className={styles.table}>
       <div className={styles.table__heading}>
              <h3 style={{margin: '0 0 20px 20px'}}>Users</h3>
              <CustomizedDialogs/>
             {/* <Button onClick={() => navigate('/orderList')} className={styles.tableBtn}>New User</Button> */}
        </div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Detail</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
           rows.length !== 0 &&
           rows.map((row:any, idx:number) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right"> <Link to={`/details/${row.id}`} className={styles.detail}>more...</Link>
             </TableCell>
              <TableCell align="center"><EditIcon className={styles.edit}/></TableCell>
              <TableCell align="center"><DeleteIcon className={styles.delete} onClick={() => userDelete(row.id)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  )
}