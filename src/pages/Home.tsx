import { useState } from "react";
import SearchBar from "../components/SearchBar"
import UserList from "../components/UserList"
import { users as usersList } from '../data';
import { User } from "../models/user.model";
import Header from "../components/Header";

const Home = () => {
  const [searchValue, setSearchValue] = useState('ALEKSANDR');
  const [users, setUsers] = useState<User[]>(usersList);

  return (
    <>
      <Header />
      <SearchBar
      initialValue={searchValue}
      onSearchClick={(searchBarValue: string) => {
        setSearchValue(searchBarValue)

        const newUsers: User[] = usersList.filter((user: User) =>
        user.name
          .toLowerCase()
          .includes((searchBarValue ?? '').toLowerCase())
        );

        setUsers(newUsers);
        }}
      />
      <UserList users={users} />
    </>
  )
}

export default Home