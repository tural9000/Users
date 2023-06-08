import React, { useState } from 'react';
import { useGetAllUsersQuery} from '../../store/api/api';
import { useUpdateUserMutation } from '../../store/api/users.api'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from '@mui/material';
import { IUser } from '../../types/user.types';

interface TableProps {
  readonly: boolean;
}

const Edittab: React.FC<TableProps> = ({ readonly }) => {
  const [editedRows, setEditedRows] = useState<{ [key: number]: boolean }>({});
  const { data: users = [], isLoading } = useGetAllUsersQuery();
  const [updateUser] = useUpdateUserMutation();

  console.log('ges', users)
  const handleChange = (field: keyof IUser, value: string) => {
    console.log('test', field)
    setEditedRows({ ...editedRows, [field]: value })
    // if (editableUser) {
    //   setEditableUser({ ...editableUser, [field]: value });
    // }
  };
  
  const handleEditClick = (id: number) => {
    setEditedRows((prevEditedRows) => ({
      ...prevEditedRows,
      [id]: true,
    }));
  };

  const handleSaveClick = (user: any) => {
    updateUser(user);
    setEditedRows((prevEditedRows) => ({
      ...prevEditedRows,
      [user.id]: false,
    }));
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            {!readonly && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={readonly ? 3 : 4}>Loading...</TableCell>
            </TableRow>
          ) : (
            users?.map((user:any) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <TextField
                    value={user.name}
                    disabled={readonly || !editedRows[user.id]}
                    onChange={(e:any) => handleChange('name', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={user.email}
                    disabled={readonly || !editedRows[user.id]}
                    onChange={(e) => {
                      // handle email change
                    }}
                  />
                </TableCell>
                {!readonly && (
                  <TableCell>
                    {editedRows[user.id] ? (
                      <Button variant="contained" color="primary" onClick={() => handleSaveClick(user)}>
                        Save
                      </Button>
                    ) : (
                      <Button variant="contained" color="secondary" onClick={() => handleEditClick(user.id)}>
                        Edit
                      </Button>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Edittab;
