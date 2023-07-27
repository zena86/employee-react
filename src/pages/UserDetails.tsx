import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../models/user.model';
import { users } from '../data';

const UserDetails = () => {
  const params = useParams()
  const [user] = useState<User>(
    users.find((user) => user.id === parseInt(params.userId as string)) as User
  );
  return (
    <div className="user-wrapper">
      <div className="data-piece">
        <div className="data-piece-title">Name: </div>
        <div className="data-piece-value">{user.name}</div>
      </div>
      <div className="data-piece">
        <div className="data-piece-title">Job Title: </div>
        <div className="data-piece-value">{user.jobTitle}</div>
      </div>
    </div>
  )
}

export default UserDetails