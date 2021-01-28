import './App.scss';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import Message from './components/Message';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';


function App() {
  // const sheet = 'https://docs.google.com/spreadsheets/d/12qeZwDvfv8vykr4GY6l7dX4oIBTQI-Py_hVbwuzzxHc/edit?usp=sharing';
  const sheetUrl = 'https://docs.google.com/spreadsheets/d/12qeZwDvfv8vykr4GY6l7dX4oIBTQI-Py_hVbwuzzxHc/pub?output=csv';
  
  useEffect(() => {
    // Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vRB4E_6RnpLP1wWMjqcwsUvotNATB8Np3OntlXb7066ULcAHI9oqqRhucltFifPTYNd7DRNRE56oTdt/pub?output=csv', {
    Papa.parse(sheetUrl, {
      download: true,
      header: true,
      complete: function(results) {
        let data = results.data;
        let keys = results.meta.fields;
        // console.log(results)
        console.log(keys)
        // console.log(data[0])
      }
    });
  })

  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <Grid />
        <Message />
      </main>
    </div>
  );
}

export default App;
