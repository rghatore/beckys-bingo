import { useState } from 'react';


export function Navbar (props) {
  const [value, setValue] = useState("firstCategory")
  const { categories } = props;

  return (
    <nav className="categories">
      <label for="bingo-category">Select a category:</label>
      <select 
        name="category"
        id="bingo-category"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option value="firstCategory">{categories && categories[0]}</option>
        <option value="secondCategory">{categories && categories[1]}</option>
        <option value="thirdCategory">{categories && categories[2]}</option>
      </select>
    </nav>
  )
}