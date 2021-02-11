import './App.scss';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import Message from './components/Message';
import Bingo from './components/Bingo';
import Status from './components/Status';
import History from './components/History';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { shuffle, clearSelected, maxNumber } from './helpers/selectors';


function App() {

  const [state, setState] = useState({
    categories: [],
    current: "firstCategory",
    items: [],
    count: 0,
    bingo: false,
    loading: true,
    message: "",
    itemsBag: [],
    history: [],
    showHistory: false
  });
  
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/1_Vm4nx1KFpSAta-3gc5RhsyP8rrdg3YhAXNA5tTHyg4/pub?output=csv';
  
  useEffect(() => {
    Papa.parse(sheetUrl, {
      download: true,
      header: true,
      complete: function(results) {
        // error handling to be implemented
        // storing categories in state
        let categories = results.meta.fields;
        setState(prev => ({...prev, categories }))
        // shuffle and update items in state
        let data = results.data;
        shuffle(data);
        // loop and update items in state
        const items = [[], [], []];
        data.forEach((item) => {
          items[0].push(item[categories[0]]);
          items[1].push(item[categories[1]]);
          items[2].push(item[categories[2]]);
        })
        // update state
        const bag = [...items[0]];
        shuffle(bag);

        setState(prev => ({
          ...prev,
          items,
          loading: false,
          message: "All the best! Have fun!",
          itemsBag: bag
        }));

      }
    });
  }, []);

  const changeCategory = (category) => {
    let bag = [];

    if (state.current === 'firstCategory') {
      state.items.length > 0 && shuffle(state.items[1]);
      state.items.length > 0 && shuffle(state.items[2]);
    } else if (state.current === 'secondCategory') {
      state.items.length > 0 && shuffle(state.items[0]);
      state.items.length > 0 && shuffle(state.items[2]);
    } else if (state.current === 'thirdCategory') {
      state.items.length > 0 && shuffle(state.items[0]);
      state.items.length > 0 && shuffle(state.items[1]);
    }

    category === 'firstCategory' && state.items[0] && (bag = [...state.items[0]]);
    category === 'secondCategory' && state.items[1] && (bag = [...state.items[1]]);
    category === 'thirdCategory' && state.items[2] && (bag = [...state.items[2]]);

    setState(prev => ({
      ...prev,
      count: maxNumber(),
      message: "All the best! Have fun!",
      current: category,
      itemsBag: bag,
      history: []
    }));
    clearSelected();
  };

  const updateCount = () => {
    let num = maxNumber();
    num !== 5 && setState(prev => ({
      ...prev,
      count: num,
      message: `${5 - num} away from Bingo!`
    }));
    num === 5 && setState(prev => ({
      ...prev,
      bingo: true,
      message: 'Yay! You are the winner!'
    }));
  };

  const reset = () => {
    setState(prev => ({...prev, bingo: false}));
  }

  const nextItem = (currentBag) => {
    if (currentBag.length > 0) {
    shuffle(currentBag);
    const grab = currentBag.pop();
    const history = [...state.history];
    history.push(grab);
    setState(prev => ({...prev, history, itemsBag: currentBag}));
    }
  }

  const displayHistory = () => {
    !state.showHistory && setState(prev => ({...prev, showHistory: true}));
    state.showHistory && setState(prev => ({...prev, showHistory: false}));
  }

  return (
    <div className="App">
      <Status
        loading={state.loading}
      />
      <Bingo
        bingo={state.bingo}
        reset={reset}
      />
      {
      state.showHistory && <History
        history={state.history}
        displayHistory={displayHistory}
      />
      }
      <Header />
      <Navbar
        categories={state.categories}
        changeCategory={changeCategory}
        itemsBag={state.itemsBag}
        nextItem={nextItem}
        history={state.history}
        displayHistory={displayHistory}
      />
      <main>
        <Grid
          items={state.items}
          current={state.current}
          updateCount={updateCount}
        />
        <Message
          message={state.message}
          count={state.count}
        />
      </main>
    </div>
  );
}

export default App;
