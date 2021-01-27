import { useState } from 'react';


export function Navbar () {
  const [value, setValue] = useState("lullabies")


  return (
    <nav className="categories">
      <label for="bingo-category">Select a category:</label>
      <select 
        name="category"
        id="bingo-category"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option value="lullabies">Lullabies</option>
        <option value="stories">Stories</option>
        <option value="games">Games</option>
      </select>
    </nav>
  )
}