import styles from './users.module.scss'
import './user.scss'
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableHead, TableContainer, TableRow, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CustomizedDialogs from '../../components/modal/addProductModal/AddProModal';
import Spinner from '../../components/spinner/Spinner';
// hooks for global data
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
// api
import { useGetAllUsersQuery, useGetUserQuery} from '../../store/api/api';
import { useDeleteUserMutation, useUpdateUserMutation } from '../../store/api/users.api'
import { IUser, IUserEdit } from './../../types/user.types';
import { makeStyles } from '@mui/styles';
import { IField } from '../../components/form/form.interface';

const useStyles = makeStyles({
  tbody: {
   
  },
});


function createData(
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  age: number,
) {
  return { id, firstName, lastName, email, age};
}

export default function BasicTable() {
    // data in kesh
  const{data, isLoading, isError} = useGetAllUsersQuery()
  const [deleteUser] = useDeleteUserMutation()
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  const [editableUser, setEditableUser] = useState<IUserEdit | null | undefined>(null);

  console.log('test', editableUser);

  // data in global state
  const {users} = useTypedSelector(state => state.users)
  const {fetchUsers} = useActions()
  const classes = useStyles();

   useEffect(() => {
    if (!isUpdating) {
      fetchUsers()
    }
  }, [isUpdating]);

  const rows = data?.map((item:IUser) => {
    console.log('row', item)
    const id = item.id
    const firstName = item.name.first
    const lastName = item.name.last
    const email = item.email
    const age = item.age
    // const {id, name, email, age} = item
    return createData( id, firstName, lastName, email, age)
  })

  const handleChange = (field: keyof IUserEdit, value: string) => {
    console.log('mail', field)
    if (editableUser) {
      setEditableUser({ ...editableUser, [field]: value });
    }
  };

  const handleEditClick = (user: IUserEdit) => {
    // bizde butun danilar tablede olmadigi uchun bele etdik yoxsa sadece orda
    setEditableUser(user);
  };
  // console.log('test2', editableUser)
  const handleSaveClick = () => {
       // burda bele yazdim chunki destruk ede bilmirdim firstName yaxud lastName tipinde problem 
       // olurdu chunki undefined ola bilir amma men tipinde gostermishem yenede nese problem olur
       // ona gore shert verib yaziriq eger true dusa ishemi et zaten burda material dersinden
       // olan kodda bu sherti yazzmishidi yeqin oda buna gores
    const actualData = data?.find((item:any) => item.id === editableUser?.id);
    if (editableUser) {
      const { firstName:first, lastName:last } = editableUser;
      const updatedData = {
        ...actualData,
        name: {first, last}
      }
      setTimeout(() => {
        updateUser(updatedData);
      }, 1000);
      setEditableUser(null);
    }
  };

  // update user
  // const handleUpdate = (idx: number) => {
  //   const itemToUpdate = data?.find((item:any) => item.id === idx);
  //   console.log('test3', idx, itemToUpdate);
  //   // updateUser(data);
  // };

  // delete user 
  const handleDelete = (id: number) => {
      deleteUser(id)
  }
  console.log('tst', editableUser);
  if(isLoading) return <Spinner/>
  return (
    <div className={styles.table}>
       <div className={styles.table__heading}>
              <h3 style={{margin: '0 0 20px 20px'}}>Users</h3>
              <CustomizedDialogs/>
             {/* <Button onClick={() => navigate('/orderList')} className={styles.tableBtn}>New User</Button> */}
        </div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Firstname</TableCell>
            <TableCell>Lastname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align='center'>Age</TableCell>
            <TableCell>Detail</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {/* shert mutleq baxmali */}
          {rows &&   
           rows.length !== 0 &&
           rows.map((row:any, idx:number) => {
            console.log('row', row);
            return (
              <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{width:"5%"}}>
                {idx + 1}
              </TableCell>
               <TableCell>
                  {editableUser?.id === row.id ? (
                    <TextField
                      value={editableUser?.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                    />
                  ) : (
                    row.firstName
                  )}
              </TableCell>
               <TableCell>
                  {editableUser?.id === row.id ? (
                    <TextField
                      value={editableUser?.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                    />
                  ) : (
                    row.lastName
                  )}
              </TableCell>
               <TableCell>
                  {editableUser?.id === row.id ? (
                    <TextField
                      value={editableUser?.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                  ) : (
                    row.email
                  )}
              </TableCell>
               <TableCell align='center'>
                {/* burada hemchinin td leri padding 0 ve align ile nizmladim */}
                  {editableUser?.id === row.id ? (
                    <TextField
                      value={editableUser?.age}
                      onChange={(e) => handleChange('age', e.target.value)}
                    />
                  ) : (
                    row.age
                  )}
              </TableCell>
              <TableCell sx={{padding: 0}}> 
                  <Link to={`/details/${row.id}`} className={styles.detail}>more...</Link>
             </TableCell>
              <TableCell sx={{padding: 0}} >
                  {editableUser?.id === row.id ? (
                    <Link onClick={handleSaveClick}  to={'#'}>Save</Link>
                  ) : (
                    <Link onClick={() => handleEditClick(row)} to={'#'} >Edit</Link>
                  )}
                </TableCell>
              <TableCell sx={{padding: 0}}>
                    <Link onClick={() => handleDelete(row.id)} to={'#'} className={styles.delete}>Delete</Link>
                </TableCell>
            </TableRow>
            )
           })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  )
}