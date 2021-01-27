import './App.scss';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import Message from './components/Message';

function App() {
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
