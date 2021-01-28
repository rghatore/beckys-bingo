import './App.scss';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import Message from './components/Message';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { shuffle } from './helpers/selectors';


function App() {

  const [state, setState] = useState({
    categories: [],
    items: []
  });
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/12qeZwDvfv8vykr4GY6l7dX4oIBTQI-Py_hVbwuzzxHc/pub?output=csv';
  
  useEffect(() => {
    Papa.parse(sheetUrl, {
      download: true,
      header: true,
      complete: function(results) {
        // error handline to be implemented
        // storing categories in state
        let categories = results.meta.fields;
        setState(prev => ({...prev, categories }))
        // shuffle and update items in state
        let data = results.data;
        shuffle(data);
        // console.log(results
        // console.log(data)
        // loop and update items in state
        const items = [[], [], []];
        data.forEach((item) => {
          items[0].push(item[categories[0]]);
          items[1].push(item[categories[1]]);
          items[2].push(item[categories[2]]);
        })
        // console.log(items);
        // update state
        setState(prev => ({...prev, items}));
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Navbar categories={state.categories}/>
      <main>
        <Grid items={state.items}/>
        <Message />
      </main>
    </div>
  );
}

export default App;
