import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar"
import UserList from "../components/UserList"
import { User } from "../models/user.model";
import Header from "../components/Header";
import { getEmployees } from "../services/employees.service";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getEmployees(searchValue).then((usersResponse: User[]) => {
      setUsers(usersResponse);
    })
  }, [searchValue])

  return (
    <>
      <Header />
      <SearchBar
        initialValue={searchValue}
        onSearchClick={(searchBarValue: string) => {
          setSearchValue(searchBarValue)
        }}
      />
      <Link to="/add-user">Add User</Link>
      <UserList users={users} />
    </>
  )
}

export default Home