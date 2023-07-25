import { useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <h1>My app</h1>
      <SearchBar onSearchClick={(x: string) => {
        setSearchValue(x)
        }}
      />
      <UserList />
      <h2>{searchValue}</h2>
    </>
  )
}

export default App
