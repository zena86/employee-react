import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { User } from '../models/user.model';
import React  from 'react';
import { Link } from 'react-router-dom';

interface UsersListProps {
  users: User[];
}

const UserList = ({ users = [] }: UsersListProps) => {

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
              <Link to={`/user-details/${user.id}`}>
                <ListItemText primary={user.name} secondary={user.jobTitle} />
              </Link>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        )
      })}
    </List>
  )
}

export default UserList