import './App.scss';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <Grid />
      </main>
    </div>
  );
}

export default App;
