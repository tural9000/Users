import React, { useState } from 'react';
import { useGetAllUsersQuery} from '../../store/api/api';
import { useUpdateUserMutation } from '../../store/api/users.api'
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Button } from '@mui/material';
import { IUser } from '../../types/user.types';


const EditableTable: React.FC = () => {
  const { data: users = [], isLoading } = useGetAllUsersQuery();
  const [updateUser] = useUpdateUserMutation();

  const [editableUser, setEditableUser] = useState<IUser | null>(null);

  const handleChange = (field: keyof IUser, value: string) => {
    if (editableUser) {
      setEditableUser({ ...editableUser, [field]: value });
    }
  };

  const handleEditClick = (user: IUser) => {
      setEditableUser(user);
  };

  const handleSaveClick = () => {
    if (editableUser) {
      updateUser(editableUser);
      setEditableUser(null);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user:any) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  {editableUser?.id === user.id ? (
                    <TextField
                      value={editableUser?.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                    />
                  ) : (
                    user.name
                  )}
                </TableCell>
                <TableCell>
                  {editableUser?.id === user.id ? (
                    <TextField
                      value={editableUser?.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                  ) : (
                    user.email
                  )}
                </TableCell>
                <TableCell>
                  {editableUser?.id === user.id ? (
                    <TextField
                      value={editableUser?.age}
                      onChange={(e) => handleChange('age', e.target.value)}
                    />
                  ) : (
                    user.age
                  )}
                </TableCell>
                <TableCell>
                  {editableUser?.id === user.id ? (
                    <Button onClick={handleSaveClick}>Save</Button>
                  ) : (
                    <Button onClick={() => handleEditClick(user)}>Edit</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default EditableTable;
