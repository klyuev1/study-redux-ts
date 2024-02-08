import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

function UserList() {
  const {users, error, loading} = useTypedSelector(state => state.user)
  const {fetchUsers} = useActions();

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div>
      {users.map(user => 
        <div key={user.id}>{user.name}</div>
      )}
    </div>
  );
}

export default UserList;