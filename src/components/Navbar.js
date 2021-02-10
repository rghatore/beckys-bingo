import { useEffect, useState } from 'react';
import Button from './Button';

export function Navbar (props) {
  const [value, setValue] = useState("firstCategory")
  // const [items, setItems] = useState(props.items || []);
  const { categories, changeCategory } = props;

  useEffect(() => {
    changeCategory(value);
  }, [value])

  return (
    <nav className="nav_bar">
      <div>
        <p>Current: </p>
        <Button next>Next item</Button>
      </div>
      <div className="categories">
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
      </div>
      <div>
        <p>Previous items</p>
        <Button history>History</Button>
      </div>
    </nav>
  )
}