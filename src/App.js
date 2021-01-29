import './App.scss';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import Message from './components/Message';
import Bingo from './components/Bingo';
import Status from './components/Status';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { shuffle, clearSelected } from './helpers/selectors';


function App() {

  const [state, setState] = useState({
    categories: [],
    current: "firstCategory",
    items: [],
    count: 0,
    bingo: false,
    loading: true
  });
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/12qeZwDvfv8vykr4GY6l7dX4oIBTQI-Py_hVbwuzzxHc/pub?output=csv';
  
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
        setState(prev => ({...prev, items, loading: false}));
      }
    });
  }, []);

  useEffect(() => {
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

    setState(prev => ({...prev, count: 0}));
    clearSelected();
  }, [state.current])


  const changeCategory = (category) => {
    setState(prev => ({...prev, current: category}));
  };

  const updateCount = (num) => {
    setState(prev => ({...prev, count: num}));
    if (num === 5) {
      setState(prev => ({...prev, bingo: true}));
    }
  };

  const reset = () => {
    setState(prev => ({...prev, bingo: false}));
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
      <Header />
      <Navbar
        categories={state.categories}
        changeCategory={changeCategory}
      />
      <main>
        <Grid
          items={state.items}
          current={state.current}
          updateCount={updateCount}
        />
        <Message
          count={state.count}
        />
      </main>
    </div>
  );
}

export default App;
