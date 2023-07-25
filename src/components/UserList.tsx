import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { users as usersList } from '../data';
import { User } from '../models/user.model';
import React, { useState } from 'react';

const UserList = () => {
  const [users] = useState(usersList);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((user: User) => {
        return (
          <React.Fragment key={user.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt={user.name} src="/static/images/avatar/1.jpg">
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={user.name} secondary={user.jobTitle} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        )
      })}
    </List>
  )
}

export default UserList