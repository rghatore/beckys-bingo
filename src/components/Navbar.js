import { useEffect, useState } from 'react';
import debounce from "lodash/debounce";
import Button from './Button';

export function Navbar (props) {
  const [value, setValue] = useState("firstCategory")
  // const [items, setItems] = useState(props.items || []);
  const { categories, changeCategory, itemsBag, history, displayHistory } = props;

  // console.log('itemsBag: ', itemsBag);

  useEffect(() => {
    changeCategory(value);
  }, [value])

  const pickOne = () => {
    // console.log('itemsBag: ', itemsBag);
    const bag = [...itemsBag];
    props.nextItem(bag);
  }

  return (
    <nav className="nav_bar">
      <div className="current_item">
        <p>Current: <b>{history.length > 0 && history[history.length - 1]}</b></p>
        <Button 
          disabled={itemsBag.length < 1 ? true : false}
          next
          onClick={debounce(pickOne, 1000)}
        >Next item</Button>
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
      <div className="previous_items">
        <p>Previous items</p>
        <Button history onClick={() => displayHistory()}>History</Button>
      </div>
    </nav>
  )
}