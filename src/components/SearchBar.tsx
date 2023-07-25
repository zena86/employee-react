import { Button, TextField } from "@mui/material"
import './SearchBar.css';
import { ChangeEvent, useState } from "react";

interface ISearchBarProps {
  onSearchClick: (text: string) => void;
}

const SearchBar = ({ onSearchClick }: ISearchBarProps) => {
  const [text, setText] = useState('');

  return (
    <div className="search-bar-wrapper">
      <TextField
        className="search-bar"
        label="Search field"
        type="search"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          onSearchClick(text)
        }}
      >Search</Button>
    </div>

  )
}

export default SearchBar